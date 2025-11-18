// Script de teste para verificar o tema
window.testTheme = () => {
  console.log('=== TESTE DE TEMA ===');
  console.log('localStorage theme:', localStorage.getItem('theme'));
  console.log('html classList:', document.documentElement.classList.toString());
  console.log('html data-theme:', document.documentElement.getAttribute('data-theme'));
  console.log('Botão encontrado:', !!document.querySelector('.theme-toggle-btn'));
};

// Testar após 3 segundos
setTimeout(() => {
  window.testTheme();
}, 3000);
