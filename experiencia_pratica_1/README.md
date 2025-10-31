# Experiência Prática 1 - HTML5 Semântico

## 📋 Descrição
Desenvolvimento de um site institucional para a **ONG Vida em Movimento** utilizando HTML5 semântico, com estrutura organizada e acessível.

## 🎯 Objetivo
Criar um site com estrutura HTML5 semântica completa para uma organização não governamental (ONG), incluindo páginas informativas, projetos sociais e formulário de cadastro de voluntários.

## 📁 Estrutura do Projeto
```
experiencia_pratica_1/
│
├── index.html              # Página inicial
├── pages/
│   ├── projetos.html       # Página de projetos e voluntariado
│   └── cadastro.html       # Página de cadastro de voluntários
├── imagens/                # Pasta para armazenar imagens
│   ├── hero-community.jpg
│   ├── missao.jpg
│   ├── visao.jpg
│   ├── valores.jpg
│   ├── projetos-hero.jpg
│   ├── projeto-futebol.jpg
│   ├── projeto-arte.jpg
│   ├── projeto-educacao.jpg
│   ├── projeto-grupo.jpg
│   ├── voluntarios.jpg
│   └── cadastro-hero.jpg
└── README.md
```

## ✅ Especificações Técnicas Implementadas

### 1. Estrutura HTML5 Semântica
- ✅ 3 páginas HTML com estrutura semântica completa
- ✅ Uso de tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- ✅ Hierarquia de títulos lógica e consistente (h1-h6)
- ✅ Uso adequado de `<address>` para informações de contato
- ✅ Listas ordenadas (`<ol>`) e não ordenadas (`<ul>`)
- ✅ Uso de `<fieldset>` e `<legend>` para agrupamento lógico de formulários

### 2. Páginas Obrigatórias

#### index.html
- Página inicial sobre a organização
- Informações de missão, visão e valores
- Estatísticas de impacto
- Informações de contato completas com `<address>`
- Imagens contextualizadas em cada seção

#### pages/projetos.html
- Descrição detalhada dos 4 projetos sociais ativos
- Seção de voluntariado (como se tornar voluntário)
- Seção de doações (como doar)
- Imagens relevantes para cada projeto

#### pages/cadastro.html
- Formulário completo de cadastro de voluntários
- Todos os campos solicitados implementados
- Validação nativa HTML5
- Agrupamento lógico com fieldsets

### 3. Formulário Complexo e Interativo

#### Campos Implementados:
- ✅ **Nome Completo** - `type="text"` com validação de caracteres
- ✅ **E-mail** - `type="email"` com pattern de validação
- ✅ **CPF** - `type="text"` com pattern `000.000.000-00`
- ✅ **Telefone** - `type="tel"` com pattern `(00) 00000-0000`
- ✅ **Data de Nascimento** - `type="date"` com validação de idade mínima
- ✅ **Endereço** - campo de texto para rua/avenida
- ✅ **CEP** - `type="text"` com pattern `00000-000`
- ✅ **Cidade** - `type="text"` com validação de caracteres
- ✅ **Estado** - `<select>` com todos os 27 estados brasileiros

#### Validações Nativas HTML5:
- ✅ Atributo `required` para campos obrigatórios
- ✅ Atributo `pattern` para máscaras de CPF, telefone e CEP
- ✅ Atributo `min` e `max` para data de nascimento
- ✅ Atributo `minlength` e `maxlength` para controle de tamanho
- ✅ Atributo `type` específicos (email, tel, date)
- ✅ Atributo `title` para mensagens de ajuda
- ✅ Elemento `<small>` para instruções de formato

#### Agrupamento Lógico:
- ✅ `<fieldset>` para "Dados Pessoais"
- ✅ `<fieldset>` para "Endereço"
- ✅ `<fieldset>` para "Área de Interesse"
- ✅ `<fieldset>` para "Termos e Condições"

#### Máscaras de Input (formato esperado):
- **CPF**: 000.000.000-00
- **Telefone**: (00) 00000-0000
- **CEP**: 00000-000

## 📸 Imagens Utilizadas
Todas as páginas contêm imagens contextualizadas:
- Imagens de comunidade e voluntários
- Fotos de projetos em ação
- Imagens de atividades esportivas, educacionais e artísticas

**Nota**: As imagens devem ser adicionadas na pasta `imagens/` conforme os nomes referenciados no código.

## 🔍 Validação W3C
Todas as páginas HTML foram desenvolvidas seguindo os padrões W3C e podem ser validadas em:
- [W3C Markup Validation Service](https://validator.w3.org/)

## 🌐 Semântica e Acessibilidade
- Uso correto de landmarks HTML5
- Hierarquia de títulos lógica
- Atributos `alt` em todas as imagens
- Atributos `aria-label` onde necessário
- Links com textos descritivos
- Formulários com labels associados corretamente

## 📝 Meta Tags Implementadas
- `charset="UTF-8"` - Codificação de caracteres
- `viewport` - Configuração para responsividade
- `description` - Descrição da página para SEO
- `keywords` - Palavras-chave relevantes

## 🎨 Estrutura de Navegação
- Menu principal presente em todas as páginas
- Links internos funcionais
- Navegação consistente
- Footer com links rápidos

## 📦 Entrega
- ✅ Estrutura de pastas organizada
- ✅ 3 páginas HTML completas
- ✅ Formulário complexo com validações
- ✅ Imagens organizadas em pasta separada
- ✅ Código semântico e válido
- ✅ README.md documentado

## 🚀 Como Visualizar
1. Clone o repositório
2. Navegue até a pasta `experiencia_pratica_1/`
3. Abra o arquivo `index.html` em um navegador web

## 👥 Autor
Projeto desenvolvido como parte da Experiência Prática 1

## 📄 Licença
Este projeto é de código aberto e está disponível sob a licença MIT.
