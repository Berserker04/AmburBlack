const config = require('./config/config');
const express = require('express');
const App = express();

const mongoose = require('mongoose');
mongoose.connect(config.urlBD, {useNewUrlParser: true});

const bodyParser = require('body-parser');
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:true}));

App.use(function(req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
    next(); }); 

App.use(require('./routes/index'));

App.listen(config.PORT, ()=>{
    console.clear();
    console.log(`Servidor corriendo en el puerto ${config.PORT}`);

})

module.exports = App;