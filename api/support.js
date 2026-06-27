export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key no configurada' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Strider Soporte <soporte@strider.lat>',
        to: ['ramoncorquiz12@gmail.com'],
        reply_to: email,
        subject: `[Soporte] ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #F5A623;">Nuevo mensaje de soporte</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Error al enviar' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}
