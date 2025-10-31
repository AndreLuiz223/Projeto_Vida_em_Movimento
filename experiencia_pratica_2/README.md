# Experiência Prática 2 - CSS Avançado e Design System

## 📋 Descrição
Desenvolvimento completo do sistema de design e estilização CSS para o site da **ONG Vida em Movimento**, incluindo design system robusto, layouts responsivos e componentes interativos.

## 🎯 Objetivo
Implementar um sistema de design profissional com CSS modular, layouts responsivos usando Flexbox e Grid, navegação sofisticada e componentes de interface completos.

## 📁 Estrutura do Projeto
```
experiencia_pratica_2/
│
├── index.html
├── pages/
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   ├── main.css              # Arquivo principal que importa todos os módulos
│   ├── variables.css         # Sistema de design e variáveis CSS
│   ├── components.css        # Componentes base (header, cards)
│   ├── forms-buttons.css     # Estilos de formulários e botões
│   ├── layout.css            # Layouts e seções
│   ├── footer.css            # Estilos do rodapé
│   └── responsive.css        # Media queries e responsividade
├── imagens/                  # Pasta para imagens
└── README.md
```

## ✅ Especificações Técnicas Implementadas

### 1. Sistema de Design Consistente

#### Variáveis CSS Customizadas (`:root`)
```css
:root {
    /* Paleta de Cores - 8 cores */
    --color-primary: #D3FF62;
    --color-primary-dark: #004534;
    --color-primary-hover: #0C6951;
    --color-secondary: #FAFFEE;
    --color-secondary-light: #EDEDFE;
    --color-neutral-100 a 900;
    
    /* Tipografia - 5+ tamanhos */
    --font-size-xs a 5xl;
    
    /* Espaçamento Modular */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 32px;
    --spacing-xl: 48px;
    --spacing-2xl: 64px;
}
```

#### ✅ **Paleta de Cores** (mínimo 8 cores):
1. **Primary**: #D3FF62 (Verde limão)
2. **Primary Dark**: #004534 (Verde escuro)
3. **Primary Hover**: #0C6951 (Verde médio)
4. **Secondary**: #FAFFEE (Amarelo claro)
5. **Secondary Light**: #EDEDFE (Lilás claro)
6. **Neutral 100-900**: Escala de cinzas (8 tons)

#### ✅ **Tipografia Hierárquica** (mínimo 5 tamanhos):
1. **xs**: 0.75rem (12px)
2. **sm**: 0.875rem (14px)
3. **base**: 1rem (16px)
4. **lg**: 1.125rem (18px)
5. **xl**: 1.25rem (20px)
6. **2xl**: 1.5rem (24px)
7. **3xl**: 2rem (32px)
8. **4xl**: 2.5rem (40px)
9. **5xl**: 3rem (48px)

#### ✅ **Sistema de Espaçamento Modular**:
- 8px, 16px, 24px, 32px, 48px, 64px, 96px

### 2. Layouts Responsivos com Flexbox e Grid

#### ✅ CSS Grid para Estrutura Geral:
```css
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--grid-gap);
}

/* Classes de coluna: col-1 até col-12 */
.col-6 { grid-column: span 6; }
```

#### ✅ Flexbox para Componentes Internos:
```css
.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}
```

#### ✅ 5 Breakpoints Responsivos:
1. **Extra Small** (0-479px): Mobile Portrait
2. **Small** (480px-639px): Mobile Landscape  
3. **Medium** (640px-767px): Tablet Portrait
4. **Large** (768px-1023px): Tablet Landscape
5. **Extra Large** (1024px+): Desktop

#### ✅ Sistema de Grid Customizado (12 colunas):
- Grid fluído com 12 colunas
- Classes utilitárias: `.col-1` até `.col-12`
- Gap customizável

### 3. Navegação Sofisticada e Interativa

#### ✅ Menu Principal Responsivo:
- Design arredondado (border-radius: 25px)
- Posicionamento fixo no topo
- Background escuro (#004534)
- Hover states interativos

#### ✅ Menu Hambúrguer Mobile:
- Botão toggle com ícone
- Menu dropdown animado
- Overlay com fundo escuro
- Transições suaves

### 4. Componentes de Interface

#### ✅ Sistema de Cards Responsivos:
```css
.card {
    background: var(--color-neutral-200);
    border-radius: 32px;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}
```

#### ✅ Botões com Estados Visuais:
- **hover**: Mudança de cor + elevação
- **focus**: Outline visível (acessibilidade)
- **active**: Scale effect
- **disabled**: Opacidade reduzida + cursor not-allowed

#### ✅ Formulários Estilizados com Validação Visual:
- Inputs com border verde (`:valid`)
- Inputs com border vermelha (`:invalid`)
- Focus states com box-shadow
- Labels associados corretamente

#### ✅ Componentes de Feedback:
- **Alerts**: Success, Error, Warning, Info
- **Toasts**: Notificações animadas
- **Modals**: Overlays com backdrop

#### ✅ Sistema de Badges e Tags:
- Badges de categoria coloridos
- Tags para classificação
- Hover states interativos

### 5. Layouts Específicos

#### Hero Sections:
- Background gradient
- Imagem de fundo com overlay
- Textos responsivos com `clamp()`
- CTAs com hover effects

#### Grid de Projetos:
- Layout em grid responsivo
- Cards com imagens
- Informações categorizadas
- Hover effects de elevação

#### Formulário de Cadastro:
- Layout em 2-3 colunas (desktop)
- Fieldsets agrupados logicamente
- Validação visual em tempo real
- Botões com estados completos

## 🎨 Arquitetura CSS Modular

### Estrutura de Importação:
```css
/* main.css */
@import url('variables.css');    /* Variáveis e tokens */
@import url('components.css');   /* Componentes base */
@import url('forms-buttons.css');/* Formulários e botões */
@import url('layout.css');       /* Layouts e seções */
@import url('footer.css');       /* Rodapé */
@import url('responsive.css');   /* Media queries */
```

### Vantagens da Modularização:
- ✅ Fácil manutenção
- ✅ Reutilização de código
- ✅ Organização clara
- ✅ Escalabilidade
- ✅ Redução de conflitos

## 🎭 Animações e Transições

### Animações Globais:
- `fadeIn`: Entrada suave
- `slideInLeft/Right`: Deslize lateral
- `pulse`: Pulsação contínua
- `scaleIn`: Modal appearance

### Transições:
- `--transition-fast`: 0.15s
- `--transition-base`: 0.2s
- `--transition-slow`: 0.3s

## 🌐 Responsividade

### Mobile First Approach:
- Estilos base para mobile
- Media queries progressivas
- Touch-friendly targets (min 44px)

### Grid Responsivo:
- 1 coluna (mobile)
- 2 colunas (tablet)
- 3-4 colunas (desktop)

### Navegação Adaptativa:
- Menu horizontal (desktop)
- Menu hambúrguer (mobile)
- Transições suaves

## ♿ Acessibilidade

- ✅ Contraste mínimo 4.5:1 para textos
- ✅ Focus visible para teclado
- ✅ Skip to content link
- ✅ Screen reader only classes
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed

## 🎯 Utilities Classes

### Spacing:
- `.mt-1` até `.mt-5` (margin-top)
- `.mb-1` até `.mb-5` (margin-bottom)
- `.p-1` até `.p-5` (padding)

### Typography:
- `.text-center`, `.text-left`, `.text-right`
- `.font-bold`, `.font-semibold`
- `.text-primary`, `.text-dark`

### Display:
- `.block`, `.inline-block`, `.hidden`
- `.flex`, `.flex-col`
- `.grid`, `.grid-2`, `.grid-3`

## 📦 Assets e Recursos

### Fontes:
- **Primary**: Inter (Google Fonts)
- **Fallback**: System fonts

### Ícones:
- Emojis nativos
- Símbolos Unicode

### Imagens:
- Formato: JPG, PNG, WebP
- Otimização: Compressão adequada
- Responsive images com `srcset`

## 🚀 Como Usar

1. Clone o repositório
2. Navegue até `experiencia_pratica_2/`
3. Abra `index.html` em um navegador
4. Redimensione a janela para ver responsividade

## 📝 Validação W3C

Todos os arquivos CSS seguem os padrões W3C:
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

## 🎨 Paleta de Cores Completa

```css
/* Primárias */
#D3FF62 - Verde limão
#004534 - Verde escuro  
#0C6951 - Verde médio

/* Secundárias */
#FAFFEE - Amarelo claro
#EDEDFE - Lilás claro

/* Neutras */
#FFFFFF - Branco
#FAFAFF - Cinza muito claro
#CACAFC - Lilás médio
#DDDDDD - Cinza claro
#B0B0B0 - Cinza médio
#807979 - Cinza escuro
#004534 - Verde texto
```

## 📊 Performance

### Otimizações:
- CSS modular para caching
- Transições hardware-accelerated
- Imagens otimizadas
- Minificação preparada

## 👥 Autor
Projeto desenvolvido como parte da Experiência Prática 2

## 📄 Licença
Este projeto é de código aberto e está disponível sob a licença MIT.
