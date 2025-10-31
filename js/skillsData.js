// ==========================================
// BASE DE DATOS DE SKILLS
// ==========================================

const skillsData = {
    // ========== BACKEND ==========
    'java': {
        icon: 'lineicons:java',
        name: 'Java',
        description: 'Desarrollo de APIs REST con arquitectura por capas. He trabajado en sistemas de gestión de usuarios implementando autenticación JWT, manejo de excepciones y buenas prácticas con Spring Boot.'
    },
    'springboot': {
        icon: 'simple-icons:springboot',
        name: 'Spring Boot',
        description: 'Creación de microservicios y APIs RESTful. Implementación de seguridad con Spring Security, autenticación JWT y manejo de datos con JPA. Experiencia en User Management API.'
    },
    'typescript': {
        icon: 'bxl:typescript',
        name: 'TypeScript',
        description: 'Desarrollo backend con Node.js usando tipado estático. Mejora la mantenibilidad del código y reducción de errores en tiempo de desarrollo.'
    },

    // ========== FRONTEND ==========
    'html': {
        icon: 'flowbite:html-solid',
        name: 'HTML5',
        description: 'Conocimientos en estructura semántica de páginas web. Uso de etiquetas modernas como section, article, nav y header. Implementación de formularios y meta tags básicos.'
    },
    'css': {
        icon: 'akar-icons:css-fill',
        name: 'CSS3',
        description: 'Diseño responsive con Flexbox y Grid Layout. Manejo de variables CSS, animaciones y transiciones. Experiencia creando proyectos con diseño mobile-first y media queries.'
    },
    'javascript': {
        icon: 'ri:javascript-fill',
        name: 'JavaScript',
        description: 'Fundamentos de programación frontend: manipulación del DOM, event listeners y funciones. Implementación de interactividad como menús dinámicos, modales y validación de formularios.'
    },

    // ========== BASES DE DATOS ==========
    'mysql': {
        icon: 'cib:mysql',
        name: 'MySQL',
        description: 'Diseño de esquemas relacionales y consultas SQL optimizadas. Integración con aplicaciones Spring Boot mediante JPA/Hibernate para persistencia de datos.'
    },
    'sqlite': {
        icon: 'file-icons:sqlite',
        name: 'SQLite',
        description: 'Implementación en aplicaciones de escritorio. Usado en Remote Work Planner para almacenamiento local de datos con arquitectura por capas (UI/Servicios/Data).'
    },
    'postgresql': {
        icon: 'akar-icons:postgresql-fill',
        name: 'PostgreSQL',
        description: 'Base de datos relacional robusta para aplicaciones empresariales. Manejo de transacciones, índices y consultas complejas con alto rendimiento.'
    },
    'mongodb': {
        icon: 'devicon-plain:mongodb-wordmark',
        name: 'MongoDB',
        description: 'Base de datos NoSQL para aplicaciones que requieren flexibilidad en el esquema. Trabajo con documentos JSON y consultas para datos no estructurado, Implementación con TypeScript.'
    },

    // ========== TOOLS ==========
    'git': {
        icon: 'mdi:git',
        name: 'Git',
        description: 'Control de versiones para todos mis proyectos. Trabajo con ramas, commits organizados, merge y resolución de conflictos. Publicación en GitHub de proyectos personales y proyectos en equipo.'
    },
    'docker': {
        icon: 'mdi:docker',
        name: 'Docker',
        description: 'Containerización de aplicaciones para entornos consistentes. Creación de imágenes Docker y gestión de contenedores para desarrollo y despliegue.'
    }
};