# PJC-MT: SPA de Consulta a Pessoas Desaparecidas (Integração API)

Esta é uma Single Page Application (SPA) desenvolvida em React com TypeScript, que consome a API da Polícia Judiciária Civil de Mato Grosso para consulta de registros de pessoas desaparecidas.

**Esta branch (`feat/api-integration`) contém a implementação que se conecta diretamente à API oficial.**

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

#### **1. Configuração do Ambiente**

Antes de iniciar, é necessário configurar o token de acesso à API.

1.  Na raiz do projeto, crie um arquivo chamado `.env`.
2.  Dentro deste arquivo, adicione a seguinte linha, substituindo `SEU_TOKEN_AQUI` pelo token de autorização fornecido pela API:
    ```
    VITE_API_TOKEN=SEU_TOKEN_AQUI
    ```

#### **2. Execução com Docker**

1.  Clone o repositório e entre na branch correta:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    git checkout feat/api-integration
    ```

2.  Construa a imagem e inicie o container:
    ```bash
    docker-compose up --build
    ```

3.  A aplicação estará disponível em **`http://localhost:8080`**.

#### **3. Execução Local (Desenvolvimento)**

1.  Clone o repositório, entre na branch e instale as dependências:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    git checkout feat/api-integration
    npm install
    ```

2.  Siga o **Passo 1 de Configuração do Ambiente** para criar seu arquivo `.env`.

3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  A aplicação estará disponível em **`http://localhost:5173`**.