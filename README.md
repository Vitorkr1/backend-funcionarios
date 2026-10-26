# API de Funcionários

API REST desenvolvida com Node.js, Express e MySQL para gerenciar funcionários.

## Tecnologias

- Node.js
- Express
- MySQL
- JavaScript

## Funcionalidades

- Listar funcionários
- Buscar funcionário por ID
- Cadastrar funcionário
- Atualizar funcionário
- Excluir funcionário

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/funcionarios` | Listar funcionários |
| GET | `/funcionarios/:id` | Buscar por ID |
| POST | `/funcionarios` | Cadastrar |
| PUT | `/funcionarios/:id` | Atualizar |
| DELETE | `/funcionarios/:id` | Excluir |

## Como executar

Instale as dependências:

```bash
npm install
```

Configure o banco de dados MySQL no arquivo `db/db.js`.

Inicie o servidor:

```bash
node app.js
```

A API será executada em `http://localhost:3000`.

## Autor

Vitor Guilherme

GitHub: [Vitorkr1](https://github.com/Vitorkr1)
