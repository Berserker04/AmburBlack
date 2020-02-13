//PUERTO
 const PORT = process.env.PORT = process.env.PORT || 3001;

//BASE DE DATOS
const urlBD= 'mongodb://localhost:27017/persona';

process.env.URLBD = urlBD;

module.exports = {
    PORT,
    urlBD

}