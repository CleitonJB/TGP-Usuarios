# TGP-Usuarios
Trabalho referente à matéria "Gerência de Projetos" do Instituto Federal Fluminense.

**Desenvolvido por:**
| Nome                    | GitHub                       |
|-------------------------|------------------------------|
| Cleiton de Jesus Braga  | https://github.com/CleitonJB |
| Hugo Nascimento Ribeiro | https://github.com/Nrhugo235 |
| Lucas Rocha Rangel      | https://github.com/Lucsesen  |

## Diretórios
| Pasta         | Descrição                                                 |
|---------------|-----------------------------------------------------------|
| **/server**   | Pasta das APIs (servidor) do projeto **TGP - Usuários**   |
| **/frontend** | Pasta da aplicação frontend do projeto **TGP - Usuários** |

## Executar projeto - Backend

Tecnologias utilizadas no projeto:
| Tecnologia   | Uso                                                        |
|:------------:|:-----------------------------------------------------------|
| **NodeJS**   | Servidor do projeto                                        |
| **Mongoose** | Biblioteca para a conexão do servidor com o banco de dados |
| **MongoDB**  | Banco de dados em nuvem do projeto                         |

##### 1) Entrar na pasta do projeto
```
cd server
```
##### 2) Instalar as dependências do projeto
```
npm install
```
##### 3) Executar o projeto
```
node index.js
```

## Executar projeto - Frontend

Tecnologias utilizadas no projeto:
| Tecnologia    | Uso                                                            |
|:-------------:|:---------------------------------------------------------------|
| **Angular**   | Framework principal de componentes visuais e lógica do projeto |
| **Bootstrap** | Framework para estilização dos componentes visuais             |

##### 1) Entrar na pasta do projeto
```
cd frontend
```
##### 2) Instalar as dependências do projeto
```
npm install
```
##### 3) Executar o projeto
```
ng serve -o
```

## Rotas
| Classe         | Rota                       | Método     | Descrição                                                 |
|----------------|----------------------------|------------|-----------------------------------------------------------|
| User           | **/user/register**         | **POST**   | Cadastrar um novo usuário (Register)                      |
| User           | **/user/login**            | **GET**    | Verificar a existência de um usuário (Login)              |
| User           | **/user/getAll**           | **GET**    | Obter uma listagem de todos os usuários cadastrados       |
| User           | **/user/update**           | **PUT**    | Atualizar os dados de um usuário cadastrado               |
| User           | **/user/delete**           | **DELETE** | Excluir os dados de um usuário cadastrado                 |
| Role           | **/role/create**           | **POST**   | Cadastrar uma nova role                                   |
| Role           | **/role/get**              | **GET**    | Verificar a existência de uma role                        |
| Role           | **/role/getAll**           | **GET**    | Obter uma listagem de todas as roles cadastradas          |
| Role           | **/role/update**           | **PUT**    | Atualizar os dados de uma role cadastrada                 |
| Role           | **/role/delete**           | **DELETE** | Excluir os dados de uma role cadastrada                   |
| Funcionalidade | **/funcionalidade/create** | **POST**   | Cadastrar uma nova funcionalidade                         |
| Funcionalidade | **/funcionalidade/get**    | **GET**    | Verificar a existência de uma funcionalidade              |
| Funcionalidade | **/funcionalidade/getAll** | **GET**    | Obter uma listagem de todas as funcionalidade cadastradas |
| Funcionalidade | **/funcionalidade/update** | **PUT**    | Atualizar os dados de uma funcionalidade cadastrada       |
| Funcionalidade | **/funcionalidade/delete** | **DELETE** | Excluir os dados de uma funcionalidade cadastrada         |
| Autorizacao    | **/autorizacao/create**    | **POST**   | Cadastrar uma nova autorização                            |
| Autorizacao    | **/autorizacao/get**       | **GET**    | Verificar a existência de uma autorização                 |
| Autorizacao    | **/autorizacao/getAll**    | **GET**    | Obter uma listagem de todas as autorizações cadastradas   |
| Autorizacao    | **/autorizacao/update**    | **PUT**    | Atualizar os dados de uma autorização cadastrada          |
| Autorizacao    | **/autorizacao/delete**    | **DELETE** | Excluir os dados de uma autorização cadastrada            |