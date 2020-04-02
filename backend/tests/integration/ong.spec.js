const request = require ('supertest');

const app = require('../../src/app');

const connection = require('../../src/database/connection');



describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback(); //desfazer todas as migrations (zera o banco) para não acumular tanta migrations
        await connection.migrate.latest(); //fazer as migrations acontecerem
    });

    afterAll( async () =>{
        await connection.destroy(); //desfaz a conexão
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "LUPAA",
            email: "lupaa@email.com",
            whatsapp: "1885856488",
            city: "Jaguaruana",
            uf: "CE"

        });

        expect(response.body).toHaveProperty('id'); //espero que dentro do corpo eu tenha uma propriedade chamada id
        expect(response.body.id).toHaveLength(8); //espero que o id tenha 8 caracteres

    })
});