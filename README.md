# 🪟 YOMSUR EYPD Vidrios y Ventanas

Sitio web profesional para **YOMSUR EYPD Vidrios y Ventanas**, negocio especializado en vidrios, cristales, aluminio y pulimetal en Azua, República Dominicana.

## 🎨 Diseño

Implementa el concepto **CRYSTAL ARCHITECTURE** - un sistema de diseño elegante y moderno con:

- **Glassmorphism** y efectos de transparencia
- Animaciones fluidas con **Framer Motion**
- Cursor personalizado magnético
- Scroll progress indicator
- Revelar de texto palabra por palabra
- Micro-interacciones y efectos hover sofisticados

### Paleta de Colores

- **Crystal Blue**: `#0EA5E9` - Color principal
- **Steel Gray**: `#64748B` - Color secundario
- **Dark**: `#0F172A` - Texto y fondos oscuros
- **White**: `#FFFFFF` - Fondos claros

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite 8** - Build tool y dev server
- **Framer Motion** - Animaciones
- **CSS Modules** - Estilos
- **Google Fonts** - Outfit (display) y DM Sans (body)

## 📦 Estructura del Proyecto

```
vidrios-del-sur/
├── public/
│   ├── imagenes/          # Imágenes del proyecto
│   └── icons.svg          # Iconos SVG
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Icons.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── RevealText.tsx
│   │   └── AnimatedCounter.tsx
│   ├── sections/          # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── TrustBarSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── FooterSection.tsx
│   ├── hooks/             # Custom hooks
│   │   ├── useMouse.ts
│   │   └── useScrollProgress.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js 18+ y npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/dantegalansisa-sudo/vidriosdelsur.git

# Entrar al directorio
cd vidriosdelsur

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
```

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Importa el repositorio `dantegalansisa-sudo/vidriosdelsur`
4. Vercel detectará automáticamente la configuración de Vite
5. Haz clic en **"Deploy"**

### Opción 2: Despliegue con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Configuración de Vercel

El proyecto incluye `vercel.json` para configuración automática:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📱 Características

### Secciones

- ✅ **Hero** - Portada impactante con imagen de fondo
- ✅ **Trust Bar** - Barra de confianza con stats
- ✅ **Servicios** - Grid de 7 servicios con imágenes
- ✅ **Proyectos** - Galería de 6 proyectos realizados
- ✅ **Por Qué Nosotros** - Ventajas competitivas
- ✅ **Proceso** - Pasos de trabajo
- ✅ **Estadísticas** - Contadores animados
- ✅ **Testimonios** - Opiniones de clientes
- ✅ **Contacto** - Formulario y datos de contacto
- ✅ **Footer** - Enlaces y redes sociales

### Componentes Interactivos

- 🎯 Cursor personalizado magnético
- 📊 Barra de progreso de scroll
- 💬 Botón flotante de WhatsApp
- ⬆️ Botón "Volver arriba"
- 🎨 Navbar con glassmorphism
- ✨ Animaciones de reveal en scroll
- 🔄 Transiciones suaves entre secciones

## 📞 Contacto

**YOMSUR EYPD Vidrios y Ventanas**
- 📍 Azua, República Dominicana
- 📱 WhatsApp: (809) 555-0123
- 📧 Email: info@vidriosdelsur.com

## 📄 Licencia

© 2026 Vidrios y Ventanas Del Sur. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando React + TypeScript + Vite**
