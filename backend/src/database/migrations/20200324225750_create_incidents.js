
exports.up = function(knex) {
    //up é responsavel pela criação da tabela
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    })
  
};

exports.down = function(knex) {
// usado para desfazer (deletar)
    return knex.schema.dropTable('incidents');
};
