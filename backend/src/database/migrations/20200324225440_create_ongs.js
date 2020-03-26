
exports.up = function(knex) {
    //up é responsavel pela criação da tabela
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
  
};

exports.down = function(knex) {
// usado para desfazer (deletar)
    return knex.schema.dropTable('ongs');
};
