/* ========================================
   DARK MODE TOGGLE
   Sistema de alternância de tema
   ======================================== */

// ========================================
// GERENCIAMENTO DE TEMA
// ========================================

function initDarkMode() {
    // Verificar preferência salva ou do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Definir tema inicial
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Criar botão de toggle
    createThemeToggle();
    
    // Escutar mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    console.log('🌓 Dark Mode iniciado! Tema atual:', initialTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Atualizar ícone do botão se existir
    updateToggleIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Animação de transição suave
    document.body.style.transition = 'background-color 0.3s ease';
}

function createThemeToggle() {
    // Verificar se já existe
    if (document.querySelector('.theme-toggle')) return;
    
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Alternar modo escuro');
    button.setAttribute('title', 'Alternar tema');
    
    // Ícones
    const sunIcon = document.createElement('span');
    sunIcon.className = 'sun-icon';
    sunIcon.textContent = '☀️';
    
    const moonIcon = document.createElement('span');
    moonIcon.className = 'moon-icon';
    moonIcon.textContent = '🌙';
    
    button.appendChild(sunIcon);
    button.appendChild(moonIcon);
    
    // Event listener
    button.addEventListener('click', function() {
        toggleTheme();
        
        // Feedback tátil em dispositivos móveis
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    });
    
    // Adicionar ao body
    document.body.appendChild(button);
}

function updateToggleIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    
    const label = theme === 'dark' 
        ? 'Alternar para modo claro' 
        : 'Alternar para modo escuro';
    
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
}

// ========================================
// CONTRASTE ALTO (Acessibilidade)
// ========================================

function toggleHighContrast() {
    const currentContrast = document.documentElement.getAttribute('data-contrast');
    const newContrast = currentContrast === 'high' ? 'normal' : 'high';
    
    document.documentElement.setAttribute('data-contrast', newContrast);
    localStorage.setItem('contrast', newContrast);
}

function initHighContrast() {
    const savedContrast = localStorage.getItem('contrast');
    if (savedContrast === 'high') {
        document.documentElement.setAttribute('data-contrast', 'high');
    }
}

// ========================================
// ATALHOS DE TECLADO
// ========================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + Shift + D = Toggle Dark Mode
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Ctrl + Shift + H = Toggle High Contrast
        if (e.ctrlKey && e.shiftKey && e.key === 'H') {
            e.preventDefault();
            toggleHighContrast();
        }
    });
}

// ========================================
// EXPORTAR FUNCIONALIDADES
// ========================================

// Inicializar quando DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initDarkMode();
        initHighContrast();
        initKeyboardShortcuts();
    });
} else {
    initDarkMode();
    initHighContrast();
    initKeyboardShortcuts();
}

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setTheme,
        toggleTheme,
        toggleHighContrast
    };
}
