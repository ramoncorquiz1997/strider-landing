# Sitio web de Strider — listo para Vercel

Esta carpeta `dist/` es el sitio completo, autónomo (cada HTML lleva todo embebido). Súbela tal cual.

## Archivos
- `index.html` ............. Página principal (landing v2, con video)
- `privacy.html` .......... Política de Privacidad  → se sirve en **/privacy**
- `terms.html` ............ Términos de Uso          → **/terms**
- `support.html` ......... Centro de Ayuda / Soporte → **/support**
- `contest-rules.html` ... Reglas de Concursos       → **/contest-rules**
- `vercel.json` ........... Activa URLs limpias (sin “.html”)

Cada página legal detecta sola qué contenido mostrar según su URL, y las pestañas
de arriba navegan entre las 4 rutas.

## Opción A — Subir por la web (lo más fácil, sin instalar nada)
1. Entra a https://vercel.com y crea una cuenta (gratis).
2. Clic en **Add New… → Project**.
3. Arrastra **el contenido de esta carpeta `dist/`** a la zona de “deploy”
   (o súbela como repositorio). Importante: sube los archivos que están DENTRO
   de `dist/`, no la carpeta envuelta.
4. Deploy. En segundos tendrás una URL tipo `strider-xxxx.vercel.app`.

## Opción B — Por terminal (Vercel CLI)
```bash
npm i -g vercel
cd dist
vercel        # primer deploy (preview)
vercel --prod # publicar a producción
```

## Conectar tu dominio strider.lat
1. En el proyecto de Vercel → **Settings → Domains → Add** → escribe `strider.lat`.
2. Vercel te dirá qué registros DNS poner (un registro A o CNAME) en donde
   compraste el dominio. Cópialos ahí.
3. Espera la verificación (minutos a unas horas). Listo: HTTPS automático.

## URLs para App Store Connect
- Política de Privacidad: `https://strider.lat/privacy`
- Términos de Uso (EULA):  `https://strider.lat/terms`
- Soporte:                 `https://strider.lat/support`
- Reglas de Concursos:     `https://strider.lat/contest-rules`

## Notas
- Para cambiar textos, edita los archivos `.dc.html` en el proyecto y vuelve a
  exportar; no edites los HTML de `dist/` a mano (están minificados).
- `index.html` pesa bastante porque el video del hero va embebido. Si quieres que
  cargue más rápido, dime y lo dejamos como archivo `.mp4` aparte.
