# 🌿 ONG Vida em Movimento - Repositório Completo

## 📁 Estrutura do Repositório

```
/app/
│
├── experiencia_pratica_1/     # 📄 HTML5 Semântico
│   ├── index.html
│   ├── pages/
│   ├── imagens/
│   └── README.md
│
├── experiencia_pratica_2/     # 🎨 CSS Avançado + Dark Mode
│   ├── index.html
│   ├── pages/
│   ├── css/
│   ├── imagens/
│   └── README.md
│
├── experiencia_pratica_3/     # ⚡ JavaScript + Validações
│   ├── index.html
│   ├── pages/
│   ├── css/
│   ├── js/
│   ├── imagens/
│   └── README.md
│
├── experiencia_pratica_4/     # 🚀 Otimização + Git + Acessibilidade
│   ├── index.html
│   ├── pages/
│   ├── css/
│   ├── js/
│   ├── imagens/
│   ├── .env.frontend
│   ├── .env.backend
│   └── README.md
│
├── frontend/                  # ⚛️ React Application (PRODUÇÃO)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                   # 🔧 FastAPI + MongoDB (PRODUÇÃO)
│   ├── server.py
│   ├── models.py
│   ├── database.py
│   └── requirements.txt
│
├── contracts.md               # API Contracts
├── test_result.md             # Test Results
└── README_PRINCIPAL.md        # Este arquivo
```

---

## 🎯 Dois Projetos em Um Repositório

### 1️⃣ Experiências Práticas (1-4) - Site Estático

**Tecnologias:** HTML5, CSS3, JavaScript Vanilla

**Características:**
- ✅ 3 páginas (Home, Projetos, Cadastro)
- ✅ Formulário com validação completa
- ✅ **Modo Escuro** implementado
- ✅ 100% responsivo (5 breakpoints)
- ✅ Acessibilidade WCAG 2.1 AA
- ✅ CSS modular
- ✅ JavaScript organizado por funcionalidade

**Como visualizar:**
```bash
# Navegue até a pasta desejada
cd experiencia_pratica_4/

# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

---

### 2️⃣ Aplicação em Produção - Full Stack

**Tecnologias:** React + FastAPI + MongoDB

**URLs:**
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:8001
- **API Docs:** http://localhost:8001/docs

**Status:** ✅ **FUNCIONANDO** (verificado agora)

**Características:**
- ✅ 6 páginas React completas
- ✅ Backend FastAPI com 6 endpoints
- ✅ MongoDB integrado
- ✅ Validações client + server
- ✅ Formulários funcionais
- ✅ Dados persistidos

**Comandos:**
```bash
# Frontend já está rodando
sudo supervisorctl status frontend
# frontend RUNNING

# Backend já está rodando
sudo supervisorctl status backend
# backend RUNNING

# Reiniciar se necessário
sudo supervisorctl restart all
```

---

## 🌙 Modo Escuro

Implementado nas experiências práticas 2, 3 e 4:

**Como ativar:**
1. Clique no botão flutuante ☀️/🌙 (canto inferior direito)
2. Use o atalho: `Ctrl + Shift + D`
3. Automático: respeita preferência do sistema

**Funcionalidades:**
- Persistência no localStorage
- Transições suaves
- Todos os componentes adaptados
- Alto contraste: `Ctrl + Shift + H`

---

## 📊 Comparação Rápida

| Aspecto | Experiências Práticas | Produção |
|---------|----------------------|----------|
| **Tipo** | Site estático | Full Stack |
| **Frontend** | HTML/CSS/JS | React |
| **Backend** | Nenhum | FastAPI |
| **Banco de Dados** | LocalStorage | MongoDB |
| **Páginas** | 3 | 6 |
| **Deploy** | GitHub Pages, Netlify | Servidor + BD |
| **URL Local** | http://localhost:8000 | http://localhost:3000 |

---

## 🚀 Status Atual

### Experiências Práticas:
- ✅ Exp. 1: HTML5 completo
- ✅ Exp. 2: CSS + Dark Mode
- ✅ Exp. 3: JavaScript + Validações + Dark Mode Toggle
- ✅ Exp. 4: Git + Acessibilidade + .env files

### Produção:
- ✅ Frontend React: **RUNNING** (porta 3000)
- ✅ Backend FastAPI: **RUNNING** (porta 8001)
- ✅ MongoDB: **RUNNING**
- ✅ Todas APIs testadas e funcionando
- ✅ Screenshot verificado ✅

---

## 📚 Documentação Detalhada

Cada pasta possui seu README completo:

- **`experiencia_pratica_1/README.md`** - HTML5 e estrutura
- **`experiencia_pratica_2/README.md`** - Sistema de design CSS
- **`experiencia_pratica_3/README.md`** - JavaScript e validações
- **`experiencia_pratica_4/README.md`** - Otimização e deployment

---

## 🎓 O Que Está Implementado

### HTML5:
✅ Estrutura semântica  
✅ Formulários avançados  
✅ Validações HTML5  
✅ Acessibilidade  

### CSS3:
✅ Design System (8 cores, 9 tamanhos fonte)  
✅ Grid 12 colunas  
✅ Flexbox  
✅ 5 breakpoints responsivos  
✅ **Modo Escuro**  
✅ Animações e transições  

### JavaScript:
✅ DOM Manipulation  
✅ Validação em tempo real  
✅ Máscaras (CPF, telefone, CEP)  
✅ Smooth scroll  
✅ Intersection Observer  
✅ **Dark Mode Toggle**  
✅ LocalStorage  

### React:
✅ 6 páginas funcionais  
✅ Componentes Shadcn  
✅ React Router  
✅ Axios para APIs  
✅ Hooks customizados  

### FastAPI:
✅ 6 endpoints REST  
✅ MongoDB integrado  
✅ Validação Pydantic  
✅ CORS configurado  
✅ Async/Await  

---

## ⚡ Acesso Rápido

**Projeto React em Produção (RECOMENDADO):**
- 🌐 http://localhost:3000

**Site Estático (Experiências Práticas):**
- Navegue até `experiencia_pratica_4/`
- Abra `index.html` no navegador
- Ou use servidor local na porta 8000

---

## 📞 Informações da ONG

**ONG Vida em Movimento** (Projeto de Demonstração)

- 📧 Email: contato@vidaemmovimento.org
- 📱 Telefone: (11) 3456-7890
- 💬 WhatsApp: (11) 98765-4321
- 📍 Endereço: Rua das Flores, 123 - São Paulo, SP

---

## 📄 Licença

MIT License - Projeto open source

---

**Desenvolvido com ❤️ para transformar vidas através do movimento!** 🌿

**Status:** ✅ Tudo funcionando corretamente!
