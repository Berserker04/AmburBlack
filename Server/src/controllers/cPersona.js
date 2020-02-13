const Persona = require('../models/mPersona');

const listar = (req, res) => { 
    Persona.find({}).exec((err, data)=>{
        if(err) throw err
        if(data) return res.json({'ok': true, data})
    })
            


}

const guardar = (req, res) => {

    let persona = new Persona({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cc : req.body.cc,
        correo: req.body.correo
    })

    persona.save((err, personaR)=>{
        if(err) return err
        return res.json({'ok': true, personaR})
    })

}

let show = (req, res) => {
    let id = req.params.id;

    Persona.findById(id, (err, userfined) => {
        if (err) {
            console.log(err);
        }
        if (userfined) {
            return res.json({
                'ok': true,
                userfined
            })
        }
        if (!userfined) {
            return res.status(400).json({
                'ok': false,
                'mesages': 'el usuario no se encontro'
            })
        }

    })
}

let update = (req,res) => {

    let id = req.params.id

    let newData = req.body

    Persona.findByIdAndUpdate(id, newData, (err, newData) =>{

        if(err) return err

        return res.json({"ok":true, newData})

    })

}

let destroy = (req, res) => {

    let id = req.params.id

    Persona.findByIdAndRemove(id, (err)=>{

        if(err) return err

        return res.json({"ok":true, 'message': 'el usuario se elimino'})

    })



}

module.exports = {
    listar,
    guardar,
    show,
    update,
    destroy
}