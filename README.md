# PJC-MT: SPA de Consulta a Pessoas Desaparecidas

Este projeto é uma Single Page Application (SPA) desenvolvida em React com TypeScript, que consome a API da Polícia Judiciária Civil de Mato Grosso para consulta de registros de pessoas desaparecidas.

---

### **Dados de Inscrição**

* **Nome:** `Lucas Ramos Fagundes`

---

### **Features**

* Visualização de registros de pessoas desaparecidas e localizadas em formato de cards.
* Busca dinâmica por nome.
* Paginação para navegação entre os registros.
* Página de detalhes para cada registro com informações completas.
* Formulário para envio de novas informações (avistamentos), incluindo observações, localização e fotos.
* Interface responsiva e intuitiva.

### **Nota Sobre a Fonte de Dados (API vs. Mock)**

O objetivo inicial deste projeto era consumir em tempo real a API de Pessoas Desaparecidas da PJC-MT. A integração inicial foi desenvolvida e pode ser encontrada na branch `feat/api-integration`.

No entanto, durante o desenvolvimento, a API apresentou instabilidade, retornando erros `500 (Internal Server Error)` de forma consistente, o que impediu o funcionamento da aplicação.

Para garantir a entrega de um projeto funcional e demonstrar todas as funcionalidades de front-end exigidas, foi implementada uma camada de serviço mockada. A versão funcional da aplicação, presente na branch `main`, utiliza essa camada de dados simulados, que simula a busca e a paginação.

---

### **Tecnologias Utilizadas**

* **React 18** com **Vite**
* **TypeScript**
* **Tailwind CSS** para estilização
* **Axios** para requisições HTTP
* **React Router DOM** para roteamento
* **React IMask** para máscaras de formulário
* **Docker** e **Docker Compose** para containerização

---

### **Pré-requisitos**

* [Node.js](https://nodejs.org/en) (v18 ou superior)
* [Docker](https://www.docker.com/products/docker-desktop/)

---

### **Instalação e Execução**

#### **Opção 1: Usando Docker**

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    ```

2.  Construa a imagem e inicie o container:
    ```bash
    docker-compose up --build
    ```

3.  A aplicação estará disponível em **`http://localhost:8080`**.

#### **Opção 2: Execução Local (Desenvolvimento)**

1.  Clone o repositório e instale as dependências:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    npm install
    ```

2.  Crie um arquivo `.env` na raiz do projeto e adicione o token da API (se aplicável):
    ```
    VITE_API_TOKEN=SEU_TOKEN_AQUI
    ```

3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  A aplicação estará disponível em **`http://localhost:5173`**.

---

### **Estrutura de Branches**

* **`main`**: Contém a versão estável e funcional do projeto, utilizando a camada de serviços **mockada**.
* **`feat/integracao-api`**: Contém o código original da integração com a **API**, mantido como registro histórico.