const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const mUsuario = new Schema ({

    nameUser: {
        type: String,
        required:true
    }, 
    email: {
        type: String,
        required:true

    },
    password: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("usuarios", mUsuario)