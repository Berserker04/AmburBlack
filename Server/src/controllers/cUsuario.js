const Usuario = require('../models/mUsuario');

const listar = (req, res) => { 
    Usuario.find({}).exec((err, data)=>{
        if(err) throw err
        if(data) return res.json({'ok': true, data})
    })
            


}

const guardar = (req, res) => {

    let usuario = new Usuario(req.body)

    usuario.save((err, UsuarioR)=>{
        if(err) return err
        return res.json({'ok': true, UsuarioR})
    })

}

let show = (req, res) => {
    let id = req.params.id;

    Usuario.findById(id, (err, userfined) => {
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

    Usuario.findByIdAndUpdate(id, newData, (err, newData) =>{

        if(err) return err

        return res.json({"ok":true, newData})

    })

}

let destroy = (req, res) => {

    let id = req.params.id

    Usuario.findByIdAndRemove(id, (err)=>{

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