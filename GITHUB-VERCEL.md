# Subir a GitHub y deployar en Vercel

## Parte 1 — Crear el repositorio en GitHub

### Paso 1: Instala Git (si no lo tienes)
Abre Terminal y ejecuta:
```bash
git --version
```
Si no está instalado, Mac te pedirá instalarlo automáticamente. Acepta.

---

### Paso 2: Crea una cuenta en GitHub
Ve a https://github.com y crea una cuenta gratis si no tienes una.

---

### Paso 3: Crea un repositorio nuevo
1. En GitHub, haz clic en **New** (botón verde arriba a la izquierda).
2. Nombre del repo: `strider-web` (o el que quieras).
3. Déjalo en **Public** o **Private**, como prefieras.
4. **No** marques ningún checkbox (sin README, sin .gitignore).
5. Clic en **Create repository**.

GitHub te mostrará una pantalla con instrucciones — no la cierres.

---

### Paso 4: Sube la carpeta desde Terminal

Abre Terminal, navega a la carpeta `dist` y ejecuta estos comandos uno por uno:

```bash
# 1. Ve a la carpeta del proyecto
cd ~/Documents/Mamadillas/dist

# 2. Inicia el repositorio Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Primer commit
git commit -m "primer deploy"

# 5. Conecta con GitHub (cambia TU_USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/strider-web.git

# 6. Sube los archivos
git push -u origin main
```

Si te pide usuario y contraseña de GitHub, usa tu usuario y un **token de acceso** (no tu contraseña normal). Para crear uno:
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Marca el permiso `repo` y genera. Copia el token y úsalo como contraseña.

---

## Parte 2 — Conectar con Vercel

### Paso 5: Importa el repo en Vercel
1. Ve a https://vercel.com e inicia sesión.
2. Clic en **Add New… → Project**.
3. Selecciona **Import Git Repository**.
4. Conecta tu cuenta de GitHub si te lo pide.
5. Busca `strider-web` y clic en **Import**.

---

### Paso 6: Configura el proyecto
En la pantalla de configuración:
- **Framework Preset**: Other
- **Root Directory**: déjalo en `/` (no cambies nada)
- **Build Command**: déjalo vacío
- **Output Directory**: déjalo vacío

Clic en **Deploy**. En ~30 segundos tu sitio está en vivo.

---

### Paso 7: Agrega la variable de entorno (para Resend)
1. En tu proyecto de Vercel → **Settings → Environment Variables**.
2. Agrega:
   - **Name**: `RESEND_API_KEY`
   - **Value**: tu API key de Resend (`re_xxxxxxxxx`)
3. Clic en **Save**.
4. Ve a **Deployments** → clic en los tres puntos del último deploy → **Redeploy** para que tome el cambio.

---

## Parte 3 — Flujo para cambios futuros

Cada vez que edites algo, solo ejecuta esto en Terminal:

```bash
cd ~/Documents/Mamadillas/dist
git add .
git commit -m "descripción del cambio"
git push
```

Vercel detecta el push automáticamente y hace un nuevo deploy en segundos. Sin entrar a Vercel manualmente.

---

## Conectar tu dominio strider.lat

Una vez que el proyecto esté en Vercel:
1. **Settings → Domains → Add** → escribe `strider.lat`.
2. Vercel te dará un registro DNS (tipo A o CNAME).
3. Copia ese registro en donde compraste el dominio.
4. Espera unos minutos — HTTPS queda activado automáticamente.
