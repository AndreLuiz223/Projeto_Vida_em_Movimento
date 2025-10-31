# Experiência Prática 3 - JavaScript e Interatividade

## 📋 Descrição
Implementação completa de JavaScript para o site da **ONG Vida em Movimento**, incluindo manipulação do DOM, Single Page Application (SPA) básico, sistema de templates e validação avançada de formulários.

## 🎯 Objetivo
Adicionar interatividade e funcionalidades dinâmicas ao site usando JavaScript moderno, incluindo validação de formulários, animações, templates e manipulação do DOM.

## 📁 Estrutura do Projeto
```
experiencia_pratica_3/
│
├── index.html
├── pages/
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   ├── main.css
│   ├── variables.css
│   ├── components.css
│   ├── forms-buttons.css
│   ├── layout.css
│   ├── footer.css
│   └── responsive.css
├── js/
│   ├── main.js                 # Funcionalidades principais e DOM
│   └── form-validation.js      # Sistema de validação de formulários
├── imagens/
└── README.md
```

## ✅ Especificações Técnicas Implementadas

### 1. Manipulação do DOM

#### ✅ Sistema de Single Page Application (SPA) Básico:
```javascript
// Navegação suave entre seções
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', smoothScrollTo);
    });
}
```

#### ✅ Sistema de Templates JavaScript:
```javascript
const templates = {
    projectCard: (project) => `
        <article class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `,
    alert: (type, message) => `...`,
    toast: (message, type) => `...`
};
```

### 2. Funcionalidades Específicas Obrigatórias

#### ✅ Sistema de Verificação de Consistência de Dados:

**A. Máscaras de Input Automáticas:**
```javascript
// CPF: 000.000.000-00
function maskCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2');
}

// Telefone: (00) 00000-0000
function maskPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
}

// CEP: 00000-000
function maskCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2');
}
```

**B. Validações Customizadas:**

1. **Validação de CPF:**
   - Verifica dígitos verificadores
   - Rejeita CPFs com todos dígitos iguais
   - Algoritmo completo de validação

2. **Validação de E-mail:**
   - Regex pattern matching
   - Verifica formato completo

3. **Validação de Telefone:**
   - Aceita 10 ou 11 dígitos
   - Formatação automática

4. **Validação de Data de Nascimento:**
   - Idade mínima 18 anos
   - Validação de data válida

5. **Validação de Nome:**
   - Mínimo 3 caracteres
   - Apenas letras e espaços

**C. Feedback Visual em Tempo Real:**
```javascript
function showError(input, message) {
    input.classList.add('error');
    // Exibe mensagem de erro abaixo do campo
}

function showSuccess(input) {
    input.classList.add('success');
    // Indica validação bem-sucedida
}
```

**D. Avisos ao Usuário:**
- ❌ Mensagens de erro específicas por campo
- ✅ Indicação visual de sucesso (borda verde)
- ⚠️ Alertas no topo do formulário
- 📝 Dicas de formato (pequenos textos de ajuda)

### 3. Funcionalidades JavaScript Implementadas

#### A. Menu Mobile Toggle:
```javascript
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
        // Troca ícone ☰ ↔ ✕
    });
}
```

#### B. Smooth Scroll:
- Navegação suave para âncoras
- Offset para header fixo
- Animação CSS `scroll-behavior: smooth`

#### C. Animações on Scroll:
```javascript
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });
    
    document.querySelectorAll('section, .card').forEach(el => {
        observer.observe(el);
    });
}
```

#### D. Contador Animado de Estatísticas:
```javascript
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;
    
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
```

#### E. Indicador de Página Ativa:
- Detecta página atual
- Adiciona classe `.active` no menu
- Funciona em todas as páginas

## 📝 Validação de Formulários - Detalhes

### Campos Validados:

| Campo | Validação | Máscara | Feedback |
|-------|-----------|---------|----------|
| Nome Completo | Min 3 chars, apenas letras | - | Tempo real |
| E-mail | Formato válido | - | Tempo real |
| CPF | Dígitos verificadores | 000.000.000-00 | Tempo real |
| Telefone | 10-11 dígitos | (00) 00000-0000 | Tempo real |
| Data Nasc. | Idade mínima 18 anos | - | Tempo real |
| CEP | 8 dígitos | 00000-000 | Tempo real |
| Endereço | Min 5 chars | - | Tempo real |
| Cidade | Min 2 chars, letras | - | Tempo real |
| Estado | Seleção obrigatória | - | Submit |

### Comportamento de Validação:

1. **Focus**: Limpa validação anterior (se campo vazio)
2. **Input**: Aplica máscara automaticamente
3. **Blur**: Valida campo e mostra feedback
4. **Submit**: Valida todos os campos + alerta geral

### Mensagens de Erro:

- ✅ Específicas por tipo de erro
- ✅ Texto claro e objetivo
- ✅ Instruções de correção
- ✅ Acessíveis para leitores de tela

## 🎨 Arquitetura JavaScript Modular

### main.js - Funcionalidades Principais:
1. Menu mobile toggle
2. Smooth scroll
3. Animações on scroll
4. Contadores animados
5. Sistema de templates
6. Indicador de página ativa

### form-validation.js - Validações:
1. Máscaras de input (CPF, telefone, CEP)
2. Validações customizadas
3. Feedback visual
4. Validação em tempo real
5. Validação ao enviar
6. Alertas e mensagens

### Organização por Funcionalidade:
```javascript
// ========================================
// MENU MOBILE TOGGLE
// ========================================
function initMobileMenu() { ... }

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() { ... }

// ========================================
// VALIDAÇÃO DE FORMULÁRIOS
// ========================================
function initFormValidation() { ... }
```

## 🚀 Inicialização

### DOMContentLoaded Event:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 ONG Vida em Movimento - JavaScript carregado!');
    
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initCounters();
    setActivePage();
    initFormValidation();
    
    console.log('✅ Funcionalidades iniciadas!');
});
```

## 📦 APIs Utilizadas

### Web APIs:
- **DOM API**: Manipulação de elementos
- **Intersection Observer API**: Animações on scroll
- **Event Listeners**: Interatividade
- **classList API**: Manipulação de classes
- **localStorage**: Pode ser usado para persistência
- **Fetch API**: Preparado para requisições AJAX

## ✨ Funcionalidades Interativas

### 1. Formulário Dinâmico:
- ✅ Validação em tempo real
- ✅ Máscaras automáticas
- ✅ Feedback visual instantâneo
- ✅ Prevenção de envio com erros
- ✅ Limpar formulário funcional

### 2. Navegação Fluida:
- ✅ Menu responsivo
- ✅ Smooth scroll
- ✅ Indicador de página ativa
- ✅ Fechamento automático do menu mobile

### 3. Animações:
- ✅ Fade in on scroll
- ✅ Contador animado
- ✅ Hover effects
- ✅ Transições suaves

### 4. UX Melhorada:
- ✅ Loading states
- ✅ Error states
- ✅ Success states
- ✅ Tooltips/helper texts

## 🧪 Testes

### Testes de Validação:
```javascript
// Exemplos de testes
validateCPF('123.456.789-09'); // false (inválido)
validateCPF('111.111.111-11'); // false (todos iguais)
validateEmail('teste@exemplo.com'); // true
validatePhone('(11) 98765-4321'); // true
```

### Casos de Teste:
1. ✅ CPF válido e inválido
2. ✅ E-mail válido e inválido
3. ✅ Telefone com 10 e 11 dígitos
4. ✅ Idade maior e menor que 18 anos
5. ✅ Campos obrigatórios vazios
6. ✅ Formatação de máscaras

## 📱 Responsividade JavaScript

### Mobile Considerations:
- Touch events preparados
- Menu adaptativo
- Performance otimizada
- Lazy loading preparado

## ♿ Acessibilidade

### JavaScript Accessibility:
- ✅ Aria labels dinâmicos
- ✅ Focus management
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Error announcements

## 🔧 Configuração e Uso

### 1. Incluir Scripts no HTML:
```html
<body>
    <!-- Conteúdo -->
    
    <script src="js/main.js"></script>
    <script src="js/form-validation.js"></script>
</body>
```

### 2. Ordem de Carregamento:
1. HTML carrega
2. CSS aplica estilos
3. JavaScript inicia funcionalidades
4. Eventos são registrados

### 3. Performance:
- Scripts no final do body
- DOMContentLoaded usado
- Listeners eficientes
- Sem jQuery (Vanilla JS)

## 📊 Métricas

### Code Quality:
- ✅ ES6+ syntax
- ✅ Comentários descritivos
- ✅ Funções modulares
- ✅ Código DRY (Don't Repeat Yourself)
- ✅ Organizado por funcionalidade

### Performance:
- ✅ Event delegation onde possível
- ✅ Throttle/Debounce preparado
- ✅ Intersection Observer (melhor que scroll)
- ✅ RequestAnimationFrame para animações

## 🎓 Conceitos Aplicados

### JavaScript Moderno:
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Array methods (forEach, map, filter)
- ES6 modules (preparado)

### Design Patterns:
- Module pattern
- Observer pattern (Intersection Observer)
- Template pattern
- Event delegation

## 📚 Documentação do Código

Cada função possui:
- ✅ Comentários descritivos
- ✅ Parâmetros documentados
- ✅ Uso explicado
- ✅ Organização por seção

## 👥 Autor
Projeto desenvolvido como parte da Experiência Prática 3

## 📄 Licença
Este projeto é de código aberto e está disponível sob a licença MIT.
