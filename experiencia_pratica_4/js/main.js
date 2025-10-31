/* ========================================
   DOM MANIPULATION & SPA BÁSICO
   ONG Vida em Movimento
   ======================================== */

// ========================================
// MENU MOBILE TOGGLE
// ========================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
            
            // Mudar ícone do menu
            if (mobileMenu.classList.contains('show')) {
                this.textContent = '✕'; // X
                this.setAttribute('aria-label', 'Fechar menu');
            } else {
                this.textContent = '☰'; // Hamburguer
                this.setAttribute('aria-label', 'Abrir menu');
            }
        });
        
        // Fechar menu ao clicar em um link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('show');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links vazios
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// ANIMAÇÕES ON SCROLL
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ser animados
    const animateElements = document.querySelectorAll('section, .card, article');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// CONTADOR DE ESTATÍSTICAS
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('#estatisticas article h3');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ========================================
// SISTEMA DE TEMPLATES
// ========================================

const templates = {
    projectCard: (project) => `
        <article class="project-card card">
            <img src="${project.image}" alt="${project.title}" width="600" height="400">
            <div>
                <span class="badge badge-primary">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Participantes:</strong> ${project.participants}</p>
                <p><strong>Status:</strong> ${project.status}</p>
            </div>
        </article>
    `,
    
    alert: (type, message) => `
        <div class="alert alert-${type}" role="alert">
            <p>${message}</p>
        </div>
    `,
    
    toast: (message, type = 'success') => `
        <div class="toast toast-${type}">
            <p>${message}</p>
        </div>
    `
};

// ========================================
// ACTIVE PAGE INDICATOR
// ========================================

function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href');
        
        if (currentPath.includes(linkPath) || 
            (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 ONG Vida em Movimento - JavaScript carregado!');
    
    // Inicializar funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initCounters();
    setActivePage();
    
    console.log('✅ Todas as funcionalidades JavaScript iniciadas!');
});

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        templates,
        animateCounter
    };
}