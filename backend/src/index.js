const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);



//ENTIDADES
// ONG
// caso (incident)


// FUNCIONALIDADES DE CADA ENTIDADE
// Login de ONG
// Logout  de ONG
// Cadastro de ONG
// Cadastrar novos casos
// Deletar casos
// Listar casos especificos de uma ONG
// Listar todos os casos
// Entrar em contato com a ONG


