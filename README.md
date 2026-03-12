# 🌿 Instituto Ver e Viver — Website Institucional

Website institucional desenvolvido para o **Instituto Ver e Viver**, com foco em apresentar a organização, seus projetos e facilitar o acesso às informações por parte da comunidade.
O projeto foi desenvolvido como **solução real para um cliente**, incluindo **frontend moderno, backend integrado e área administrativa protegida por login**.

---

## 🚀 Tecnologias Utilizadas

### Frontend

* React
* Vite
* JavaScript
* CSS Modules
* HTML5
* Lucide React (ícones)

### Backend

* Node.js
* Express
* Supabase
* PostgreSQL

### Infraestrutura

* Cloudflare Pages (deploy)
* GitHub (versionamento)
* Git

---

## 📌 Funcionalidades

* Página institucional responsiva
* Seções de **Missão, Visão e Valores**
* Apresentação de projetos sociais
* Interface moderna e acessível
* Sistema de **autenticação (login)**
* **Área administrativa** para gerenciamento de conteúdo
* Integração com **backend e banco de dados**
* Layout adaptado para **desktop e mobile**

---

## 🖥️ Preview do Projeto

---

## 📂 Estrutura do Projeto

```
src
 ├── components
 │   ├── Topo
 │   ├── Hero
 │   ├── MissaoVisaoValores
 │   ├── Projetos
 │
 ├── pages
 │   ├── Home
 │   ├── Login
 │   ├── Admin
 │
 ├── services
 │   └── supabaseClient.js
 │
 ├── styles
 │
 └── App.jsx
```

---

## 🔐 Autenticação

O projeto possui sistema de login utilizando **Supabase Auth**, permitindo acesso a uma área administrativa protegida.

Essa área permite o gerenciamento interno das informações exibidas no site.

---

## ⚙️ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/nome-do-repositorio.git
```

---

### 2️⃣ Entrar na pasta do projeto

```bash
cd nome-do-repositorio
```

---

### 3️⃣ Instalar dependências

```bash
npm install
```

---

### 4️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

---

### 5️⃣ Rodar o projeto

```bash
npm run dev
```

O projeto ficará disponível em:

```
http://localhost:5173
```

---

## 🌐 Deploy

O projeto foi publicado utilizando **Cloudflare Pages**, garantindo:

* alta performance
* distribuição global (CDN)
* carregamento rápido

---

## 📱 Responsividade

O layout foi desenvolvido para funcionar bem em:

* Desktop
* Tablets
* Smartphones

Utilizando **CSS Modules e Media Queries**.

---

## 🎯 Objetivo do Projeto

Este projeto teve como objetivo:

* desenvolver um **website institucional profissional**
* aplicar conceitos de **React em projeto real**
* integrar **frontend e backend**
* implementar **autenticação e área administrativa**
* criar uma solução **escalável e moderna**

---

## 👩‍💻 Desenvolvido por

### *Emanoel Lima*

Desenvolvedor Full Stack responsável pela arquitetura do backend da aplicação, incluindo criação da API, modelagem e integração do banco de dados, além da implementação do sistema de autenticação (login) e da área administrativa. Também contribuiu em partes do desenvolvimento da interface.

### *Sibele Caetano*

Desenvolvedora Frontend com foco em React e JavaScript. Responsável pelo desenvolvimento da interface da aplicação, estrutura das páginas, estilização, responsividade e integração do frontend com os serviços e APIs do sistema.

---

## 📄 Licença

Este projeto foi desenvolvido para uso institucional do **Instituto Ver e Viver**.

---

