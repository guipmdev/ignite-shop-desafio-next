<!-- ===== HEADER ===== -->
<p align="right">
  <a href="./README.md" title="Read the README in english">
    <img
      src="https://img.shields.io/badge/lang-en-red?style=flat-square&labelColor=202024"
      alt="lang-en"
    />
  </a>
  <img
    src="https://img.shields.io/badge/lang-pt--br-gray?style=flat-square&labelColor=202024"
    alt="lang-pt-br"
  />
</p>

<h1 align="center">
  <a
    href="https://guipmdev-ignite-shop-v2.vercel.app/"
    title="Acessar a aplicação web"
  >
    <img
      src="./src/assets/logo.svg"
      alt="Logo do Ignite Shop"
      height="60px"
    />
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/ignite-shop-v2?color=%2304D361&labelColor=202024&label=linguagens"
    alt="Contagem de linguagens do repositório"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/ignite-shop-v2?labelColor=202024&label=tamanho do repo"
    alt="Tamanho do repositório"
  />
  <img
    src="https://img.shields.io/github/commit-activity/m/guipmdev/ignite-shop-v2?color=black&labelColor=202024&label=atividade de commits"
    alt="Atividade de commits"
  />
  <a
    href="https://github.com/guipmdev/ignite-shop-v2/commits/main"
    title="Visualizar commits do repositório"
  >
    <img
      src="https://img.shields.io/github/last-commit/guipmdev/ignite-shop-v2?labelColor=202024&label=último commit"
      alt="Último commit"
    />
  </a>
  <a href="./LICENSE" title="Visualizar licença do projeto">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024&label=licen%C3%A7a"
      alt="Licença do projeto"
    />
  </a>
  <a href="https://www.rocketseat.com.br/" title="Acessar o site da Rocketseat">
    <img
      src="https://img.shields.io/badge/Layout_por-Rocketseat-8257e5?labelColor=202024"
      alt="Designer do layout"
    />
  </a>
</p>

![Captura de tela da página inicial da aplicação](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-ignite-shop-v2.vercel.app/"
    >Acessar a aplicação web ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Índice</h2>
  </summary>

- [📍 Visão geral](#-visão-geral)
- [✨ Funcionalidades](#-funcionalidades)
- [🤖 Demo](#-demo)
- [🎨 Layout](#-layout)
- [🛠 Tecnologias](#-tecnologias)
  - [Website](#website)
  - [Úteis](#úteis)
- [🚀 Primeiros passos](#-primeiros-passos)
  - [✔️ Pré-requisitos](#️-pré-requisitos)
  - [📦 Instalação](#-instalação)
  - [⚙️ Utilização](#️-utilização)
- [📄 Licença](#-licença)
- [👏 Reconhecimentos](#-reconhecimentos)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Visão geral

Este projeto é uma aplicação web desenvolvida em _Next.js_ e _TypeScript_ de uma loja on-line fictícia que exibe seus produtos na página inicial em formato de carrossel, possibilitando aos usuários visualizarem os detalhes clicando neles e fazer o pagamento pela Stripe. Ela também tem um carrinho de compras e uma página de sucesso que exibe os detalhes dos itens comprados.

O objetivo do Ignite Shop V2 é proporcionar uma experiência de compra ainda mais amigável e visualmente atraente, agora com uma sacola para guardar múltiplos itens, integrando-se a um processador de pagamento popular para simplificar o processo de compra aos clientes.

## ✨ Funcionalidades

👕 **Veja todas as peças de roupa** disponíveis de forma fácil

👀 **Veja mais detalhes** clicando no produto desejado

🛒 Adicione os itens que desejar ao **carrinho**

🔄 Seu **carrinho fica salvo** até você fechar o pedido, então pode atualizar a página sem medo

💳**Faça o pagamento** pela Stripe (_apenas simbólico_)

🚚 Aguardar as compras chegarem

## 🤖 Demo

https://github.com/guipmdev/ignite-shop-v2/assets/136738335/fd45f116-53eb-426f-b6e9-aa328dadaa6f

## 🎨 Layout

O layout da aplicação foi projetado pela **Rocketseat** e está disponível no [Figma](https://www.figma.com/file/nIkPaTxXF0NedsKjOaSdMq/Ignite-Shop-2.0-%E2%80%A2-Desafio-React).

<p align="center">
  <img
    src="./src/assets/images/layout-cover.webp"
    alt="Imagem de capa do layout da aplicação web"
    width="50%"
  />
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas para desenvolver esse projeto:

### Website

<p>
  <a href="https://nextjs.org/">
    <img
      src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js"
      alt="Next.js"
    />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript"
      alt="TypeScript"
    />
  </a>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
  <a href="https://github.com/rocketseat/eslint-config-rocketseat">
    <img
      src="https://img.shields.io/badge/Rocketseat_ESLint_config-gray?style=for-the-badge"
      alt="Rocketseat ESLint config"
    />
  </a>
</p>

<p>
  <a href="https://axios-http.com/">
    <img
      src="https://img.shields.io/badge/Axios-373747?style=for-the-badge&logo=Axios"
      alt="Axios"
    />
  </a>
  <a href="https://stripe.com/">
    <img
      src="https://img.shields.io/badge/Stripe-white?style=for-the-badge&logo=stripe"
      alt="Stripe"
    />
  </a>
  <a href="https://useshoppingcart.com/">
    <img
      src="https://img.shields.io/badge/use--shopping--cart-gray?style=for-the-badge"
      alt="use-shopping-cart"
    />
  </a>
  <a href="https://sharp.pixelplumbing.com/">
    <img
      src="https://img.shields.io/badge/sharp-2f3136?style=for-the-badge&logo=sharp"
      alt="sharp"
    />
  </a>
</p>

<p>
  <a href="https://stitches.dev/">
    <img
      src="https://img.shields.io/badge/Stitches-151719?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlldy1ib3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSI+CjxzdHlsZT4KICBwYXRoLCBjaXJjbGUgewogICAgc3Ryb2tlOiBoc2woMjAwIDclIDguNCUpOwogIH0KCiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgcGF0aCwgY2lyY2xlIHsKICAJICBzdHJva2U6IGhzbCgyNDAgMyUgOTMlKTsKICAgIH0KICB9Cjwvc3R5bGU+CjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNC41IiBzdHJva2Utd2lkdGg9IjIiIC8+CjxwYXRoIGQ9Ik0xMi44MTg0IDMxLjMyMThMMzEuODcwOSAyMC4zMjE4IiAvPgo8cGF0aCBkPSJNMy4zMTgzNiAxNC44Njc0TDIyLjM3MDkgMy44Njc0MyIgLz4KPHBhdGggZD0iTTguNjUzMzIgMjkuMTA3N0wyNS45NzM4IDE5LjEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTkuMjE1ODIgMTYuMDgxNUwyNi41MzYzIDYuMDgxNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KPHBhdGggZD0iTTEzLjIzMzQgMTQuMjI5N0wyMi41MDk5IDIxLjEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTE2LjY5NzMgMTIuMjMwMkwyNS45NzM2IDE5LjEwNzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTkuMjE1ODIgMTYuMDgxNUwxOS4wNDU5IDIzLjEwNzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPC9zdmc+"
      alt="Stitches"
    />
  </a>
  <a href="https://phosphoricons.com/">
    <img
      src="https://img.shields.io/badge/Phosphor_Icons-eeeae3?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzMyA0NCIgZmlsbD0ibm9uZSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNy4xMDI2IDAuMDUwMjU3NUgxLjQ5NDM0QzEuMTk0NDYgMC4wNTAyNTc1IDAuOTA2ODU5IDAuMTY5MzggMC42OTQ4MTUgMC4zODE0MjVDMC40ODI3NyAwLjU5MzQ3IDAuMzYzNjQ3IDAuODgxMDU2IDAuMzYzNjQ3IDEuMTgwOTNWMjguOTE4OUMwLjM2NzQ2NCAzMi44OTQ4IDEuOTQ3OTMgMzYuNzA3IDQuNzU4NDUgMzkuNTE5M0M3LjU2ODk3IDQyLjMzMTYgMTEuMzgwMSA0My45MTQ1IDE1LjM1NjEgNDMuOTIwOUMxNS41MDQ1IDQzLjkyMDkgMTUuNjUxNiA0My44OTE3IDE1Ljc4ODcgNDMuODM0OEMxNS45MjU5IDQzLjc3OCAxNi4wNTA2IDQzLjY5NDcgMTYuMTU1NiA0My41ODk3QzE2LjI2MDYgNDMuNDg0NyAxNi4zNDM4IDQzLjM2MDEgMTYuNDAwNyA0My4yMjI5QzE2LjQ1NzUgNDMuMDg1NyAxNi40ODY3IDQyLjkzODcgMTYuNDg2NyA0Mi43OTAyVjMwLjA0OTVIMTcuMDkzQzE5LjA4NTQgMzAuMDg1MiAyMS4wNjQ5IDI5LjcyMzYgMjIuOTE2IDI4Ljk4NThDMjQuNzY3MSAyOC4yNDgxIDI2LjQ1MjYgMjcuMTQ4OSAyNy44NzQyIDI1Ljc1MjVDMjkuMjk1OSAyNC4zNTYxIDMwLjQyNSAyMi42OTA1IDMxLjE5NTkgMjAuODUyOUMzMS45NjY3IDE5LjAxNTMgMzIuMzYzNyAxNy4wNDI2IDMyLjM2MzcgMTUuMDQ5OUMzMi4zNjM3IDEzLjA1NzIgMzEuOTY2NyAxMS4wODQ1IDMxLjE5NTkgOS4yNDY4N0MzMC40MjUgNy40MDkyOCAyOS4yOTU5IDUuNzQzNjYgMjcuODc0MiA0LjM0NzI4QzI2LjQ1MjYgMi45NTA4OSAyNC43NjcxIDEuODUxNzMgMjIuOTE2IDEuMTEzOTVDMjEuMDY0OSAwLjM3NjE2OCAxOS4wODU0IDAuMDE0NTcyMyAxNy4wOTMgMC4wNTAyNTc1SDE3LjEwMjZaTTE0LjIxNTcgNDEuNjExNEMxMS4yNDQzIDQxLjM0MTIgOC40NjE1OSA0MC4wMzc4IDYuMzUxNzggMzcuOTI4QzQuMjQxOTcgMzUuODE4MSAyLjkzODU2IDMzLjAzNTQgMi42NjgzMiAzMC4wNjRIMTQuMjE1N1Y0MS42MTE0Wk0xNC4yMTU3IDI0LjEzMTVMMy4zMjc0OSAyLjMxMTYxSDE0LjIzNUwxNC4yMTU3IDI0LjEzMTVaTTE3LjEwMjYgMjcuNzg4MkgxNi40OTY0VjIuMzExNjFIMTcuMTAyNkMxOC43OTYyIDIuMjc4NjkgMjAuNDc5NCAyLjU4Mzg2IDIyLjA1MzcgMy4yMDkyM0MyMy42MjggMy44MzQ2IDI1LjA2MTggNC43Njc2MyAyNi4yNzEyIDUuOTUzNzVDMjcuNDgwNiA3LjEzOTg3IDI4LjQ0MTMgOC41NTUyNyAyOS4wOTcyIDEwLjExNzFDMjkuNzUzIDExLjY3OSAzMC4wOTA4IDEzLjM1NTkgMzAuMDkwOCAxNS4wNDk5QzMwLjA5MDggMTYuNzQzOSAyOS43NTMgMTguNDIwOCAyOS4wOTcyIDE5Ljk4MjdDMjguNDQxMyAyMS41NDQ1IDI3LjQ4MDYgMjIuOTU5OSAyNi4yNzEyIDI0LjE0NkMyNS4wNjE4IDI1LjMzMjEgMjMuNjI4IDI2LjI2NTIgMjIuMDUzNyAyNi44OTA2QzIwLjQ3OTQgMjcuNTE1OSAxOC43OTYyIDI3LjgyMTEgMTcuMTAyNiAyNy43ODgyWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
      alt="Phosphor Icons"
    />
  </a>
  <a href="https://www.radix-ui.com/">
    <img
      src="https://img.shields.io/badge/Radix_UI-1a181c?style=for-the-badge&logo=radixui"
      alt="Radix UI"
    />
  </a>
  <a href="https://keen-slider.io/">
    <img
      src="https://img.shields.io/badge/Keen--Slider-gray?style=for-the-badge"
      alt="Keen-Slider"
    />
  </a>
</p>

_\* Confira o arquivo [<kbd>package.json</kbd>](./package.json)_

### Úteis

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://figma.com/">
    <img
      src="https://img.shields.io/badge/Figma-white?style=for-the-badge&logo=figma"
      alt="Figma"
    />
  </a>
  <a href="https://fonts.google.com/">
    <img
      src="https://img.shields.io/badge/Google_Fonts-white?style=for-the-badge&logo=google-fonts"
      alt="Google Fonts"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Primeiros passos

### ✔️ Pré-requisitos

Antes de você começar, certifique-se que você tem as seguintes ferramentas instaladas na sua máquina: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). Também é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/Download).

### 📦 Instalação

1. Clone o repositório:

```sh
git clone https://github.com/guipmdev/ignite-shop-v2/
```

2. Mude para o diretório do projeto:

```sh
cd ignite-shop-v2
```

3. Instale as dependências:

```sh
npm install
```

### ⚙️ Utilização

1. Acesse/crie a sua conta na [Stripe](https://stripe.com/)

   - Crie uma loja, produtos e faça toda a configuração necessária

2. Obtenha as suas [_API keys_](https://dashboard.stripe.com/test/apikeys)

3. Renomeie o arquivo `.env.local.example` para `.env.local` e insira as informações necessárias:

```sh
mv .env.local.example .env.local
```

4. Inicie a aplicação web:

```sh
npm run dev
```

5. Acesse http://localhost:3000/ para visualizar a aplicação

## 📄 Licença

Este projeto está licenciado de acordo com os termos da licença `MIT`. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## 👏 Reconhecimentos

> - Muito obrigado à [Rocketseat](https://www.rocketseat.com.br/) pelo layout e pelas dicas de como montar este projeto

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Feito com 💙 por
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Fique à vontade para
  <a href="mailto:guipm.dev@gmail.com">entrar em contato comigo</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Voltar ao topo &nbsp;&nbsp;↑</b>
  </a>
</p>
