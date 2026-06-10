<div align="center">

# 🛸 Mission Control App
## Central de Monitoramento de Missões Espaciais

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.github.io/router/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![AsyncStorage](https://img.shields.io/badge/AsyncStorage-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react-native-async-storage.github.io/async-storage/)

<br/>

> *"Houston, we have an app."*

**Projeto Acadêmico — Global Solution 2026**
**FIAP • 2º Ano • Ciência da Computação**
**Disciplina: Cross-Platform Application Development**

</div>

---

## 🌌 Sobre o Projeto

O **Mission Control App** é uma central de monitoramento de missões espaciais desenvolvida como aplicativo mobile cross-platform. Inspirado nos painéis de controle da NASA e das grandes agências espaciais, o app simula em tempo real o acompanhamento de dados críticos de uma missão no espaço profundo — tudo na palma da sua mão.

Desenvolvido com **React Native + Expo**, o projeto entrega uma interface funcional, visualmente imersiva e tecnicamente sólida, abordando na prática os pilares do desenvolvimento mobile moderno: gerenciamento de estado global, persistência de dados, roteamento declarativo e formulários com validação robusta.

Este projeto é uma entrega da **Global Solution** do **1º semestre de 2026**, avaliando as competências adquiridas ao longo da disciplina de **Cross-Platform Application Development**.

---

## 🚀 Funcionalidades

- 📊 **Dashboards Interativos** — Painéis com visualização em tempo real de dados de sensores, sistemas de energia, comunicação e estabilidade orbital da missão.

- 🚨 **Sistema de Alertas Automáticos** — Disparo de notificações e alertas visuais sempre que os parâmetros de monitoramento atingem níveis críticos ou fora do padrão.

- 📝 **Formulários com Validação Completa** — Formulários para entrada e atualização de dados da missão, com validação de campos obrigatórios, formatos corretos e limites permitidos, garantindo a integridade dos dados transmitidos.

- 🗺️ **Navegação entre Telas** — Fluxo de navegação fluido e declarativo entre as seções do app (Dashboard, Detalhes da Missão, Configurações, Alertas) utilizando **Expo Router** com roteamento baseado em sistema de arquivos.

- 💾 **Persistência Local de Dados** — Dados da missão e preferências do usuário são salvos localmente no dispositivo via **AsyncStorage**, garantindo que as informações persistam mesmo após fechar o aplicativo.

- 🌐 **Gerenciamento de Estado Global** — Compartilhamento de estado entre todas as telas da aplicação por meio da **Context API**, eliminando prop drilling e centralizando o controle da missão.

---

## 🛠️ Tecnologias Empregadas

| Tecnologia | Finalidade | Versão |
|---|---|---|
| [React Native](https://reactnative.dev/) | Framework principal para desenvolvimento mobile cross-platform | Latest (via Expo SDK) |
| [Expo](https://expo.dev/) | Plataforma e conjunto de ferramentas para desenvolvimento e build | SDK 52+ |
| [Expo Router](https://expo.github.io/router/) | Roteamento e navegação declarativa baseada em arquivos | v4+ |
| [Context API](https://react.dev/reference/react/createContext) | Gerenciamento de estado global nativo do React | — |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Persistência de dados local e assíncrona no dispositivo | Latest |
| JavaScript / TypeScript | Linguagens de programação utilizadas no desenvolvimento | ES2022+ |

---

## ⚙️ Como Executar o Projeto

Siga o passo a passo abaixo para clonar e rodar o projeto em sua máquina local. Prepare sua estação de controle! 🖥️

### Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes itens instalados em seu ambiente:

- [Node.js](https://nodejs.org/) (versão **18.x** ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) instalado no seu dispositivo físico (iOS ou Android) **ou** um emulador/simulador configurado.

---

### 🔧 Instalação e Execução

**1. Clone o repositório**

```bash
git clone https://github.com/enzocerneviva/cs-gs-mission-control-app.git
```

**2. Acesse a pasta do projeto**

```bash
cd cs-gs-mission-control-app
```

**3. Instale as dependências**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento Expo**

```bash
npx expo start
```

**5. Abra o app no seu dispositivo**

Após executar o comando acima, um **QR Code** será exibido no terminal. Escolha uma das opções abaixo:

| Plataforma | Como abrir |
|---|---|
| 📱 **Dispositivo físico (Android/iOS)** | Escaneie o QR Code com o app **Expo Go** |
| 🤖 **Emulador Android** | Pressione `a` no terminal |
| 🍎 **Simulador iOS** | Pressione `i` no terminal (requer macOS + Xcode) |
| 🌐 **Navegador Web** | Pressione `w` no terminal |

> **💡 Dica:** Certifique-se de que o seu dispositivo e o computador estejam conectados na **mesma rede Wi-Fi** para que o Expo Go consiga se comunicar com o servidor de desenvolvimento.

---

### 🗂️ Estrutura do Projeto

```
cs-gs-mission-control-app/
├── app/                    # Rotas e telas (Expo Router - file-based routing)
│   ├── (tabs)/             # Navegação por abas
│   │   ├── dashboard.tsx   # Painel principal de monitoramento
│   │   ├── alerts.tsx      # Central de alertas da missão
│   │   └── settings.tsx    # Configurações e dados da missão
│   ├── _layout.tsx         # Layout raiz da aplicação
│   └── index.tsx           # Tela inicial / splash
├── components/             # Componentes reutilizáveis da interface
├── context/                # Context API — estado global da missão
├── hooks/                  # Custom hooks
├── constants/              # Constantes, temas e configurações
├── assets/                 # Imagens, ícones e fontes
├── app.json                # Configuração do Expo
└── package.json
```

---

## 👨‍🚀 Equipe de Desenvolvimento

Os engenheiros responsáveis por colocar esta missão no ar:

| # | Nome Completo | RM |
|:---:|---|:---:|
| 👨‍💻 | `Enzo Cerneviva` | `563480` |
| 👩‍💻 | `Victor Hugo` | `RM-564633` |
| 👨‍💻 | `Matheus Lara` | `RM-564049` |

---

## 📋 Informações Acadêmicas

| Campo | Informação |
|---|---|
| **Instituição** | FIAP — Faculdade de Informática e Administração Paulista |
| **Curso** | Ciência da Computação |
| **Ano/Turma** | 2º Ano |
| **Disciplina** | Cross-Platform Application Development |
| **Avaliação** | Global Solution — 1º Semestre de 2026 |
| **Data de Entrega** | 09/06/2026 |

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como parte da avaliação **Global Solution** da **FIAP**.

---

<div align="center">

Desenvolvido com ☕ e muito ♥ por alunos da FIAP

*"Per aspera ad astra"* — Pelos obstáculos, às estrelas.

</div>
