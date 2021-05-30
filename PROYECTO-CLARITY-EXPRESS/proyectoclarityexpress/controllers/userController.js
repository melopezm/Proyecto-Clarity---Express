const User = require('../models/User');

//Listar

exports.list = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    }catch(error) {
        console.log('Error');
        res.send(error);
    }
};


// añadir uno POST
exports.add = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.json({message: 'Usuaria agregada con exito'});
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: 'Ya existe una usuaria con ese username o con ese email',
            });
        }
        console.log('Error');
        res.send(error);
    }
};


// get by id
exports.show = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json('La usuaria no existe');
        }
        res.json(user);

    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//update
exports.update = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );
        res.json({user});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//delete
exports.delete = async(req, res) => {
    try {
        await User.findOneAndDelete({ _id: req.params.id});
        res.json({message: 'Se ha borrado a la usuaria'})
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}