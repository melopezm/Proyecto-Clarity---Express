//Inicializar
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require('./routes');

const app =  express();
port = 3000;
//Usar formato Json
//app.use(express.json());

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/store-api',
    {
        useNewUrlParser: true,
    }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', routes());

/*
//Rutas
app.get('/',(req,res)=>{
    res.json({
        name: "Manuel"
    })
})
*/
// Servidor
/*app.listen(3000,()=>{
    console.log("Server on port 3000");
})*/
//app.listen(3000,"192.168.0.4",()=>{console.log("Server on port 3000")})
app.listen(port,()=>{console.log("Server on port " + port)})