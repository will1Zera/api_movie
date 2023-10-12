<div align="center">
    <br>
    <h1 align="center"> API RESTful de filmes</h1>
    <p align="center">
        <a href="#sobre-o-desafio">Sobre</a> | 
	<a href="#ambiente-local">Ambiente</a> | <a href="#rotas-da-api">Rotas</a>
    </p>
    <p align="center"> 
        <i><h5>Criação de uma api para filmes</a></h5></i
    </p>
</div>
<br>

## Sobre o projeto
Foi desenvolvido uma API RESTful de filmes, com algumas rotas e funcionalidades, utilizando express, typescript e mongodb. 


##### Tecnologias utilizadas:
- Typescript
- Express
- Mongodb
- Postman
- Morgan
- Winston
##### Pré requisitos:
- <a href="https://nodejs.org/en">Node js</a>

## Ambiente local
Primeiramente, você deve clonar o projeto de api na sua máquina. Execute o seguinte comando no terminal:

```sh
git clone https://github.com/will1Zera/api_movie.git
```

## Executando a api
Depois de clonar o projeto, você deve abrir um novo terminal na pasta raiz do projeto e executar o seguinte comando: 

```sh
npm run dev
```
Pronto, desta forma a api será executada na porta 3000 do localhost.

## Rotas da api
### Criar um filme
`POST <host>/movie`

Este endpoint é responsável por criar um novo filme.
* Todos os campos são obrigatórios.
* O campo "rating" aceita apenas números.
* O campo "poster" aceita apenas uma url.
* Os demais campos são strings.

### Buscar um filme
`GET <host>/movie/{id}`

Este endpoint é responsável por trazer os dados de um filme pelo seu id.
### Buscar todos filmes
`GET <host>/movie`

Este endpoint é responsável por trazer todos os filmes.
### Atualizar um filme
`PACTH <host>/movie/{id}`

Este endpoint é responsável por atualizar os dados de um filme pelo seu id.
* Os campos possuem as mesmas regras da rota POST.

### Deletar um filme
`DELETE <host>/movie/{id}`

Este endpoint é responsável por deletar um filme pelo seu id.

## Importante
1. Para que ocorra tudo certo, siga a ordem correta de comandos listados.

<br>
by <a href="https://github.com/will1Zera">William Bierhals</a> 😄 <br>
📥 <a href="https://www.linkedin.com/in/williambierhals/">Linkedin</a>