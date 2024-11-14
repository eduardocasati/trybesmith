# ⚒️ Trybesmith

![TypeScript Badge](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js Badge](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express Badge](https://img.shields.io/badge/express-black?style=for-the-badge&logo=express&logoColor=white) ![JSON Web Tokens Badge](https://img.shields.io/badge/json%20web%20tokens-black?style=for-the-badge&logo=json%20web%20tokens&logoColor=white) ![Sequelize Badge](https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) ![Chai Badge](https://img.shields.io/badge/chai-A40802?style=for-the-badge&logo=chai&logoColor=white) ![Mocha Badge](https://img.shields.io/badge/mocha-8d6748?style=for-the-badge&logo=mocha&logoColor=white) ![Docker Badge](https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white)

> _Este projeto foi desenvolvido como parte da **[Formação em Desenvolvimento Web](https://www.betrybe.com/formacao-desenvolvimento-web)** pela **[Trybe](https://www.betrybe.com/)**, no **Módulo: Back-end**, **Seção 8: Introdução a TypeScript**_

#### Autor: **Eduardo Casati**

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardocasati/)

## Objetivos do Projeto

Este projeto teve como objetivo consolidar e avaliar conhecimentos dos seguintes tópicos:

- TypeScript
- Test Driven Development (TDD)
- Chai, Sinon e Mocha
- Contêineres (Docker)
- Arquitetura de Software MSC
- Node.js
- Express.js
- JSON Web Tokens
- ORM (Sequelize)

## O que foi Desenvolvido

O projeto consiste em uma API de uma loja de itens medievais.

## Rodando o Projeto

Siga os passos abaixo:

1. Crie e inicie os contêineres: `docker-compose up -d --build`
2. Rode o comando `npm run db:reset` para criar o banco de dados com as tabelas que serão utilizadas e populá-las.
3. Para usar o terminal do container use o comando `docker exec -it trybesmith_api bash`

Com o projeto inicializado após as etapas acima, você pode fazer requisições à API na porta 3001: `http://localhost:3001/{rota}`.

## Executando os Testes

Para executar os testes basta usar o comando `npm run test:local`

Para executar um arquivo de testes específico, use o comando `npm run test:local caminhodoarquivo/nomedoarquivo.ts`, por exemplo: `npm run test:local tests/integration/login/login.test.ts `

## Documentação da API

<details>

<summary>Mostrar</summary>

### Índice

- [Métodos](#métodos)
- [Respostas](#respostas)
- [Rotas](#rotas)
  - [Login](#login)
    - [`POST /login`](#post-login)
  - [Produtos](#produtos)
    - [`POST /products`](#post-products)
    - [`GET /products`](#get-products)
  - [Pedidos](#pedidos)
    - [`GET /orders`](#get-orders)

## Métodos

Requisições para a API devem seguir os padrões:

| Método | Descrição                                   |
| :----- | :------------------------------------------ |
| `GET`  | Retorna informações de um ou mais recursos. |
| `POST` | Utilizado para criar um novo recurso.       |

## Respostas

| Código                     | Descrição                                                                                   |
| :------------------------- | :------------------------------------------------------------------------------------------ |
| `200 Successful`           | Requisição foi bem sucedida.                                                                |
| `201 Created`              | Requisição foi bem sucedida e um novo recurso foi criado.                                   |
| `400 Bad Request`          | Erros de validação ou os campos informados não existem no sistema.                          |
| `401 Unauthorized`         | A requisição não possui credenciais de autenticação válidas.                                |
| `404 Not Found`            | O recurso solicitado não foi encontrado.                                                    |
| `422 Unprocessable Entity` | A requisição foi compreendida, mas contém erros de validação que impedem seu processamento. |

## ROTAS

## Login

Fazer login no sistema.

### `POST /login`

- **Requisição**

  - Body

    **_Obs:_** _O exemplo abaixo serve para testar o endpoint de login, pois este projeto não conta com um endpoint para cadastro de usuário._

    ```json
    {
      "username": "Hagar",
      "password": "terrível"
    }
    ```

- **Respostas**

  - ✅ Login bem-sucedido:

    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```

  - ⚠️ Os campos não foram devidamente preenchidos:

    ```json
    {
      "message": "\"username\" and \"password\" are required"
    }
    ```

  - ❌ Usuário ou senha inválidos:

    ```json
    {
      "message": "Username or password invalid"
    }
    ```

## Produtos

### `POST /products`

- **Requisição**

  - Body

    ```json
    {
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro"
    }
    ```

- **Respostas**

  - ✅ Cadastro bem-sucedido

    ```json
    {
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro"
    }
    ```

  - ⚠️ Os campos não foram devidamente preenchidos

    ```json
    {
      "message": "\"name\" is required"
    }
    ```

    ```json
    {
      "message": "\"price\" is required"
    }
    ```

  - ⚠️ Os campos não são uma string:

    ```json
    {
      "message": "\"name\" must be a string"
    }
    ```

    ```json
    {
      "message": "\"price\" must be a string"
    }
    ```

  - ⚠️ Os campos tem menos de 3 caracteres:

    ```json
    {
      "message": "\"name\" length must be at least 3 characters long"
    }
    ```

    ```json
    {
      "message": "\"price\" length must be at least 3 characters long"
    }
    ```

### `GET /products`

- **Resposta**

  ```json
  [
    {
      "id": 1,
      "name": "Excalibur",
      "price": "10 peças de ouro",
      "orderId": 1
    },
    {
      "id": 2,
      "name": "Espada Justiceira",
      "price": "20 peças de ouro",
      "orderId": 1
    },
    {
      "id": 3,
      "name": "Lira de Orfeu",
      "price": "1 peça de ouro",
      "orderId": 2
    },
    {
      "id": 4,
      "name": "Armadura de Aquiles",
      "price": "1 peça de ouro",
      "orderId": 2
    },
    {
      "id": 5,
      "name": "Harpa de Dagda",
      "price": "15 peças de ouro",
      "orderId": 3
    }
  ]
  ```

## Pedidos

### `GET /orders`

- **Resposta**

  ```json
  [
    {
      "id": 1,
      "userId": 1,
      "productIds": [2, 1]
    },
    {
      "id": 2,
      "userId": 3,
      "productIds": [4, 3]
    },
    {
      "id": 3,
      "userId": 2,
      "productIds": [5]
    }
  ]
  ```

</details>
