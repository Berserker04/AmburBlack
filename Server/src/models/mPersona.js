const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const mPersona = new Schema ({

    nombre: {
        type: String,
        required:true
    }, 
    apellido: {
        type: String,
        required:true

    },
    cc: {
        type: Number,
        required:true
    },
    correo: {
        type: String,
        required:true
    }

})

module.exports = mongoose.model("personas", mPersona);