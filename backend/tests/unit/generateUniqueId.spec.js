const generateUniqueId = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', ()=> { //categoria do teste
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect (id).toHaveLength(8);
    }) //esperon que o tamanho do id da ong (tohavelength) tenha 8 caracteres
}); 