# 💼 Portfolio Personal - Santiago Sordi

Portfolio web desarrollado como proyecto final universitario para demostrar dominio de fundamentos frontend y buenas prácticas de desarrollo web.

## 📋 Descripción

Portfolio personal interactivo y responsive que presenta mi experiencia como desarrollador de software, proyectos destacados y habilidades técnicas. Desarrollado desde cero con HTML5, CSS3 y JavaScript vanilla, aplicando conceptos modernos de diseño web y arquitectura frontend.

### 🎯 Objetivos del Proyecto

- Demostrar dominio de fundamentos frontend (HTML semántico, CSS moderno, JavaScript vanilla)
- Aplicar diseño responsive mobile-first
- Implementar interactividad sin dependencias externas
- Crear una experiencia de usuario fluida y profesional
- Optimizar rendimiento y accesibilidad

---

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Responsive**: Mobile-first con breakpoints para tablet y desktop
- **Layout Adaptativo**: Una columna en móvil, dos columnas (sidebar fijo + contenido scrolleable) en desktop
- **Dark Theme**: Paleta de colores moderna con acentos cyan (#2dd4bf)
- **Animaciones Suaves**: Transiciones CSS y efectos hover en todos los elementos interactivos
- **Navegación Inteligente**: Resaltado automático según la sección visible durante el scroll

### 💻 Funcionalidades Interactivas
- **Menú Hamburguesa**: Navegación responsive con overlay fullscreen en móvil
- **Modal de Skills**: Sistema de modales dinámicos para mostrar detalles de cada tecnología
- **Formulario de Contacto**: Integración con Formspree, validación client-side y feedback visual
- **Active Navigation**: Indicador visual de la sección actual durante el scroll
- **Smooth Scroll**: Navegación suave entre secciones

### 🛠️ Aspectos Técnicos
- **Variables CSS**: Sistema de design tokens para colores, espaciados y tipografía
- **Flexbox & Grid**: Layouts modernos y flexibles
- **JavaScript Modular**: Código organizado en funciones reutilizables
- **Fetch API**: Comunicación asíncrona para envío de formularios
- **Event Delegation**: Manejo eficiente de eventos
- **Scroll Detection**: Sistema de detección de scroll multi-plataforma

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones, Media Queries
- **JavaScript ES6+**: Vanilla JS con módulos, arrow functions, Fetch API

### Librerías Externas
- **Iconify**: Sistema de iconos SVG optimizado
- **Formspree**: Servicio de formularios sin backend

### Herramientas
- **Git & GitHub**: Control de versiones
- **VS Code**: Editor de código


---

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos (888 líneas, bien organizados)
├── js/
│   ├── script.js          # Lógica principal (180 líneas)
│   └── skillsData.js      # Base de datos de skills (73 líneas)
├── assets/
│   ├── images/
│   │   ├── icons/         # Iconos SVG
│   │   └── proyects/      # Imágenes de proyectos
│   └── yo.jpg
└── README.md
```

---

## 🎨 Arquitectura Frontend


### Patrón de Diseño Implementado
- **Módulos funcionales**: Cada funcionalidad en su propia función
- **Event-driven architecture**: Sistema basado en eventos
- **Data-driven UI**: Modal que consume datos de skillsData.js

---


## 🎯 Funcionalidades Destacadas

### 1. Sistema de Modal Dinámico
```javascript
// Modal reutilizable que consume datos externos
const skill = skillsData[skillKey];
document.getElementById('modalTitle').textContent = skill.name;
document.getElementById('modalDescription').textContent = skill.description;
modal.classList.add('active');
```

### 2. Detección de Scroll Multi-plataforma
```javascript
// Detecta si el scroll está en window (móvil) o .content (desktop)
const isDesktop = window.innerWidth >= 1024;
const scrollY = isDesktop ? scrollContainer.scrollTop : window.scrollY;
```

### 3. Validación y Feedback de Formulario
```javascript
// Validación client-side + feedback visual con alertas
fetch(form.action, {
    method: 'POST',
    body: formData
}).then(response => {
    if (response.ok) showAlert('¡Mensaje enviado!', 'success');
});
```

---

## 🚀 Cómo Ejecutar Localmente

### Opción 1: Abrir directamente
```bash
# Simplemente abre el archivo
index.html
```

### Opción 2: Con Live Server (VS Code)
```bash
1. Instalar extensión "Live Server" en VS Code
2. Click derecho en index.html
3. "Open with Live Server"
```

### Opción 3: Con servidor Python
```bash
# Python 3
python -m http.server 8000

# Abrir en navegador
http://localhost:8000
```

---


## 🎨 Paleta de Colores

```css
Primarios:
- Background:  #0f172a (Azul oscuro)
- Secondary:   #1e293b (Azul gris)
- Accent:      #2dd4bf (Cyan brillante)

Textos:
- Primary:     #cbd5e1 (Gris claro)
- Secondary:   #94a3b8 (Gris medio)
- Highlight:   #f1f5f9 (Blanco suave)
```

---

## 📈 Mejoras Futuras

- Agregar animaciones con Intersection Observer
- Modo claro/oscuro toggle
- Sección de blog
- Integración con GitHub API para mostrar repos dinámicamente
- Optimización de imágenes con lazy loading
- [ ] Agregar más proyectos

---

## 📞 Contacto

- **GitHub**: [@sordi005](https://github.com/sordi005)
- **LinkedIn**: [Santiago Sordi](https://www.linkedin.com/in/santiago-sordi-gil-9a7525327/)
- **Email**: sordisantiagodev@gmail.com

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte de la **Tecnicatura en Programación - UTN (2024)**.

---


Desarrollado como proyecto final para demostrar competencias en:
- Desarrollo Frontend
- Diseño Responsive
- JavaScript Vanilla
- Buenas Prácticas de Código
- Arquitectura de Software Frontend

**Universidad Tecnológica Nacional - 2025**

