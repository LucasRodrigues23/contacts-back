Projeto Backend com Express e TypeORM

Este é um projeto backend desenvolvido com o framework Express e a biblioteca TypeORM. Ele fornece uma API para interagir com um banco de dados.

Configuração
Certifique-se de ter o Node.js instalado em sua máquina.
Faça o clone deste repositório para sua máquina local.
No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:

yarn install

Configuração do Banco de Dados
Configure as credenciais do banco de dados no arquivo .env, seguindo o exemplo fornecido no arquivo .env.example.

Execute o seguinte comando para criar as tabelas do banco de dados:

yarn typeorm migration:run

Executando o Projeto

No diretório raiz do projeto, execute o seguinte comando para iniciar o servidor:

yarn dev

O servidor estará acessível em http://localhost:3000.

Rotas
A seguir estão as principais rotas fornecidas pela API:

Users:
GET /users: Retorna todos os usuários cadastrados.
POST /users: Cria um novo usuário.
GET /users/:id: Retorna as informações de um usuário específico.
PATCH /users/:id: Atualiza as informações de um usuário específico.
DELETE /users/:id: Exclui um usuário específico.

Contacts:
POST /users: Cria um novo usuário.
GET /users/:id: Retorna as informações de um usuário específico.
PATCH /users/:id: Atualiza as informações de um usuário específico.
DELETE /users/:id: Exclui um usuário específico.

Estrutura do Projeto

├── src/
│ ├── @types/
│ ├── controllers/
│ ├── entities/
│ ├── interfaces/
│ ├── middlewares/
│ ├── migrations/
│ ├── routes/
│ ├── schemas/
│ ├── services/
│ ├── app.ts
│ ├── data-source.ts
│ ├── errors.ts
│ └── server.ts
├── .env.example
├── .gitignore
├── package.json
└── README.md
└── tsconfig.json
