
// evitar parpadeo al cargar
document.documentElement.classList.add('loading');

// menu hamburguesa
function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Abrir/cerrar menú
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Cerrar menú al hacer al clickear en un enlace
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
}

//modal de skills 
// se abre al clickear en una skill consumiendo de skillsData
function openModal(skillKey) {
    const modal = document.getElementById('skillModal');
    const skill = skillsData[skillKey];
    
    // Llenar contenido del modal
    document.getElementById('modalIcon').setAttribute('icon', skill.icon);
    document.getElementById('modalTitle').textContent = skill.name;
    document.getElementById('modalDescription').textContent = skill.description;

    // Mostrar modal
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('skillModal');
    modal.classList.remove('active');
}

function initModal() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Abrir modal al hacer al clickear en una skill
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            const skillKey = this.dataset.skill;
            openModal(skillKey);
        });
    });

    // Cerrar con botón cerrar
    document.getElementById('modalClose').addEventListener('click', closeModal);

    // Cerrar al hacer al clickear fuera del modal
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Cerrar con tecla escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// formulario de contacto
function initContactForm() {
    const form = document.querySelector('.contact form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // deshabilitar botón mientras envía
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        const formData = new FormData(form);
        
        // enviar a Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showAlert('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                form.reset();
            } else {
                showAlert('Hubo un error al enviar el mensaje. Intenta de nuevo.', 'error');
            }
        })
        .catch(error => {
            showAlert('Error de conexión. Verifica tu internet e intenta de nuevo.', 'error');
        })
        .finally(() => {
            // rehabilitar botón
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
        });
    });
}

// Función para mostrar alertas
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    setTimeout(() => alert.classList.add('show'), 100);
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    }, 4000);
}


function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    function updateActiveNav() {
        // Detectar si es desktop o móvil
        const isDesktop = window.innerWidth >= 1024;
        
        
        const scrollContainer = isDesktop ? document.querySelector('.content') : window;
        const scrollY = isDesktop ? scrollContainer.scrollTop : window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

                navLinks.forEach(link => link.classList.remove('active'));

                const activeLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Escuchar scroll en desktop (.content) y en móvil (window)
    const contentElement = document.querySelector('.content');
    
    if (contentElement) {
        contentElement.addEventListener('scroll', updateActiveNav);
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    updateActiveNav();
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio cargado ✓');
    
    initMenu();
    initModal();
    initContactForm();
    initActiveNav();  

    
    // transicion de carga 
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');
});
