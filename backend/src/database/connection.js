const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //VARIAVEIS AMBIENTE NODE
// se o ambiente for teste, config é teste

const connection = knex(config);

module.exports = connection;