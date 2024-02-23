# Projeto Lista de Usuários

## Introdução
Este projeto foi desenvolvido como parte de um estudo sobre React, GraphQL e Apollo. O objetivo principal é explorar como o React pode ser integrado ao GraphQL, utilizando o Apollo Client para facilitar o consumo e gerenciamento de dados.

## Tecnologias Utilizadas
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png" alt="React Logo" height="20"> **React**: Uma biblioteca JavaScript para construir interfaces de usuário. O React permite a criação de componentes reutilizáveis, facilitando o desenvolvimento de interfaces interativas.
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/128px-GraphQL_Logo.svg.png" alt="GraphQL Logo" height="20"> **GraphQL**: Uma linguagem de consulta para APIs que proporciona uma forma mais eficiente e poderosa de buscar e manipular dados.
- <img src="https://static-00.iconduck.com/assets.00/apollo-icon-2048x2048-zl6zcxhq.png" alt="Apollo Client Logo" height="20"> **Apollo Client**: Uma biblioteca cliente para GraphQL que simplifica a integração do GraphQL com o React. O Apollo Client gerencia o estado da aplicação, realiza consultas e mutações de forma eficiente, facilitando a integração com o GraphQL.


## Funcionalidades do Projeto
- **Listagem de Usuários**: Os usuários são recuperados através de consultas GraphQL e exibidos na interface do usuário usando componentes React.
- **Adição de Usuários**: Utilizando mutações GraphQL, é possível adicionar novos usuários à lista.
- **Edição de Usuários**: Os dados dos usuários podem ser editados através de mutações GraphQL, permitindo a atualização de informações existentes na lista.
- **Remoção de Usuários**: Os usuários existentes podem ser removidos da lista por meio de mutações GraphQL.

## Execução do Projeto

Este projeto consiste em um frontend e um backend separados. Para iniciar o projeto, siga as instruções abaixo.

### Instalação

1. **Frontend:**
   - Navegue até a pasta `frontend` do projeto.
   - Execute o seguinte comando para instalar as dependências:
     ```
     
     npm install
     
     ```

2. **Backend:**
   - Navegue até a pasta `backend` do projeto.
   - Execute o seguinte comando para instalar as dependências:
     ```
     
     npm install
     
     ```

### Execução

1. **Frontend:**
   - Na pasta `frontend`, execute o seguinte comando para iniciar o servidor de desenvolvimento:
     ```
     
     npm run dev
     
     ```
   - O frontend estará disponível em [http://localhost:5173](http://localhost:5173).

2. **Backend:**
   - Na pasta `backend`, execute o seguinte comando para iniciar o servidor:
     ```
     
     npm run dev
     
     ```
   - O backend estará disponível em [http://localhost:4000](http://localhost:4000).

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de executar esses comandos. Ajuste as portas e scripts conforme necessário, dependendo das configurações específicas do seu projeto.
