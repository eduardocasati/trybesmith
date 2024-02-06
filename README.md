# ⚒️ Trybesmith

![TypeScript Badge](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js Badge](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express Badge](https://img.shields.io/badge/express-black?style=for-the-badge&logo=express&logoColor=white) ![JSON Web Tokens Badge](https://img.shields.io/badge/json%20web%20tokens-black?style=for-the-badge&logo=json%20web%20tokens&logoColor=white) ![Sequelize Badge](https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) ![Chai Badge](https://img.shields.io/badge/chai-A40802?style=for-the-badge&logo=chai&logoColor=white) ![Mocha Badge](https://img.shields.io/badge/mocha-8d6748?style=for-the-badge&logo=mocha&logoColor=white) ![Docker Badge](https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white)

> _Este projeto foi desenvolvido como parte da **[Formação em Desenvolvimento Web](https://www.betrybe.com/formacao-desenvolvimento-web)** pela **[Trybe](https://www.betrybe.com/)**, no **Módulo: Back-end**, **Seção 8: Introdução a TypeScript**_

#### Autor: **Eduardo Casati**

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardocasati/)

## Objetivos do Projeto

Este projeto teve como objetivo consolidar e avaliar conhecimentos dos seguintes tópicos:

-  TypeScript
-  Test Driven Development (TDD)
-  Chai, Sinon e Mocha
-  Containers (Docker)
-  Arquitetura de Software MSC
-  Node.js
-  Express.js 
-  JSON Web Tokens
-  ORM (Sequelize)

## O que foi Desenvolvido

O projeto consiste em uma API de uma loja de itens medievais.

## Rodando o Projeto

Siga os passos abaixo:

1. Crie e inicie os containers: ```docker-compose up -d --build```
2. Acesse o terminal do container: ```docker exec -it blogs_api bash```
   - Os comandos a seguir devem ser executados no terminal do container
3. Instale as dependências: ```npm install```
4. Crie o banco de dados: ```npm run db:reset```
5. Inicie o servidor: ```npm start```

Com o projeto inicializado após as etapas acima, você pode fazer requisições à API na porta 3001: ```http://localhost:3001/{rota}```.

## Executando os Testes

Para executar os testes basta usar o comando ```npm run test:local```

Para executar um arquivo de testes específico, use o comando ```npm run test:local caminhodoarquivo/nomedoarquivo.ts```, por exemplo: ```npm run test:local tests/unit/controllers/login.controller.test.ts```

## Documentação da API

<details>

<summary>Mostrar</summary>

</details>
