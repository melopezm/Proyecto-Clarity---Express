const User = require('../models/Test');

//Listar

exports.list = async (req, res) => {
    try {
        const tests = await Test.find({});
        res.json(tests);
    }catch(error) {
        console.log('Error');
        res.send(error);
    }
};

//EN ESPERA DEL FORMATO DE LOS TEST

// añadir uno POST


// get by id


//update


//delete
