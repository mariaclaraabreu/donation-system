const crypto = require('crypto');


module.exports =  function generateUniqueId(){ //module.exports do node

    return crypto.randomBytes(4).toString('HEX'); //linha do create
}