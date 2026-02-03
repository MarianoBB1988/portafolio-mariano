# Portafolio de Mariano Bastarreix

Este es el repositorio del portafolio personal de Mariano, desarrollado con Next.js y Tailwind CSS.

## Características principales

- **Next.js (App Router):** Estructura moderna con rutas en la carpeta `app/`.
- **Tailwind CSS:** Utilidad para estilos rápidos y responsivos.
- **Componentes reutilizables:** Secciones como About, Projects, Skills, Contact, y navegación en `components/`.
- **Videos de LinkedIn embebidos:** Cada proyecto puede mostrar un video de LinkedIn debajo del título.
- **Página de CV:** Página dedicada `/cv` con el contenido del currículum y un botón para volver al inicio.
- **Diseño responsive:** Adaptado para dispositivos móviles y escritorio.

## Estructura del proyecto

```
portfolio-for-mariano/
├── app/
│   ├── cv/
│   │   └── page.tsx         # Página del CV
│   ├── layout.tsx           # Layout global
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   └── ...                  # Otros componentes y UI
├── hooks/                   # Custom hooks
├── lib/                     # Utilidades
├── public/                  # Archivos estáticos
├── styles/                  # Archivos CSS
├── package.json
├── tsconfig.json
└── ...
```

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-for-mariano.git
   cd portfolio-for-mariano
   ```
2. **Instala dependencias:**
   ```bash
   npm install
   # o
   pnpm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Construye para producción:**
   ```bash
   npm run build
   npm start
   ```

## Personalización

- Modifica la información personal y proyectos en los archivos de la carpeta `components/`.
- Cambia los estilos en `globals.css` o usando clases de Tailwind en los componentes.
- Agrega o edita secciones según tus necesidades.

## Licencia

Este proyecto es de uso personal. Puedes adaptarlo para tu propio portafolio.
