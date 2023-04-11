# TGP-Usuarios
Trabalho referente à matéria "Gerência de Projetos" do Instituto Federal Fluminense.

**Desenvolvido por:**
| Nome                    | GitHub |
|-------------------------|------------------------|
| Cleiton de Jesus Braga  | https://github.com/CleitonJB |
| Hugo Nascimento Ribeiro | https://github.com/Nrhugo235 |
| Lucas Rocha Rangel      | https://github.com/Lucsesen |

## Diretórios
| **/register** | Pasta       | Descrição |
|-------------|-------------|
| **/server** | Pasta para as APIs do projeto **TGP - Usuários** |

## Executar projeto - Backend

##### 1) Entrar na pasta do projeto
```
cd server
```
##### 2) Executar o projeto
```
node index.js
```

## Rotas
| Rota          | Método     | Descrição                                           |
|---------------|------------|-----------------------------------------------------|
| **/register** | **POST**   | Cadastrar um novo usuário (Register)                |
| **/login**    | **GET**    | Verificar a existência de um usuário (Login)        |
| **/getAll**   | **GET**    | Obter uma listagem de todos os usuários cadastrados |
| **/update**   | **PUT**    | Atualizar os dados de um usuário cadastrado         |
| **/delete**   | **DELETE** | Excluir os dados de um usuário cadastrado           |