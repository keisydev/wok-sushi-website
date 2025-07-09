# Wok Sushi Website

![Deploy](https://img.shields.io/github/deployments/keisydev/wok-sushi-website/production?label=deploy&style=for-the-badge)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge)

O Wok Sushi Website é uma aplicação web moderna e responsiva, desenvolvida com React, para um restaurante inovador de culinária asiática. O objetivo principal é proporcionar uma presença online cativante, exibindo o menu requintado, especialidades e um sistema de reservas intuitivo, tudo através de uma interface fluida e elegante.

**[➡️ Acesse a demonstração ao vivo](https://keisydev.github.io/wok-sushi-website/)**

---

## ✨ Funcionalidades Principais

O projeto demonstra uma vasta gama de funcionalidades de front-end e atenção à experiência do utilizador:

* **Página Inicial (Restaurante):**
    * Carrossel de imagens dinâmico que exibe o ambiente sofisticado do restaurante.
    * Secções dedicadas à história do restaurante e ao seu compromisso com práticas ecológicas e sustentáveis.
    * Destaque para as especialidades mais populares com descrições concisas.
    * Chamadas para ação (CTAs) claras para explorar o menu e fazer reservas.
* **Página do Menu:**
    * Menu completo e abrangente, categorizado para facilitar a navegação.
    * Filtro interativo por categoria, permitindo aos utilizadores visualizar apenas os pratos desejados.
    * Modal (pop-up) para visualização detalhada das imagens dos pratos ao clicar.
    * Botão "Voltar ao Topo" flutuante para uma navegação suave em páginas extensas.
* **Página de Especialidades:**
    * Galeria visualmente rica que destaca os pratos mais famosos do restaurante com nomes e descrições.
    * Funcionalidade de modal de imagem reutilizada para visualização ampliada.
* **Página de Menus para Grupos:**
    * Explicação detalhada das opções de menus para grupos.
    * Menus drop-down interativos que exibem diferentes pacotes e preços associados.
    * Redirecionamento direto para a página de Reservas.
* **Página de Reservas:**
    * Formulário de reserva completo com validação de campos em tempo real.
    * Integração com o serviço Formspree para envio real de e-mails de reserva.
    * Integração interativa do Google Maps para exibir a localização do restaurante.
    * Informações de contacto essenciais e horários de funcionamento.
* **Páginas Legais:**
    * Páginas dedicadas à Política de Privacidade, Aviso Legal e Política de Cookies para garantir a conformidade legal.
* **Banner de Consentimento de Cookies:**
    * Um banner flutuante que aparece na primeira visita, permitindo aos utilizadores aceitar ou recusar cookies, com a preferência armazenada localmente.
* **Design Responsivo:**
    * Desenvolvido com uma abordagem *mobile-first*, garantindo uma experiência de utilizador otimizada em todos os dispositivos (telemóveis, tablets, desktops).

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi uma excelente oportunidade para aplicar e aprofundar conhecimentos nas seguintes tecnologias e conceitos do ecossistema React:

### Tecnologias

* **React.js:** Biblioteca principal para a construção da interface de utilizador.
* **React Router DOM (com HashRouter):** Para gestão de rotas em Single Page Applications (SPA), otimizado para hospedagem estática como GitHub Pages.
* **CSS Modules:** Para estilização modular e encapsulada, prevenindo conflitos de estilos.
* **Formspree:** Serviço de terceiros para processar envios de formulários sem a necessidade de um backend.
* **gh-pages:** Pacote para facilitar a publicação do projeto no GitHub Pages.
* **React Icons:** Para a fácil integração de ícones vetoriais.
* **Vite:** Ferramenta de build rápida e moderna.

### Conceitos de Arquitetura e UI/UX

* **Componentização:** Divisão da aplicação em componentes reutilizáveis e independentes.
* **Gerenciamento de Estado:** Utilização de `useState` e