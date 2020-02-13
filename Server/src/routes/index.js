const express = require('express');
const Ruta = express();


//Persona
const personas = require("../controllers/cPersona");
Ruta.get("/personas", personas.listar); 
Ruta.post("/personas", personas.guardar); 
Ruta.get("/personas/:id", personas.show); 
Ruta.put("/personas/:id", personas.update);
Ruta.delete("/personas/:id", personas.destroy);

//Usuario
const usuario = require("../controllers/cUsuario");
Ruta.get("/usuario", usuario.listar); 
Ruta.post("/usuario", usuario.guardar); 
Ruta.get("/usuario/:id", usuario.show); 
Ruta.put("/usuario/:id", usuario.update);
Ruta.delete("/usuario/:id", usuario.destroy);

module.exports = Ruta;



