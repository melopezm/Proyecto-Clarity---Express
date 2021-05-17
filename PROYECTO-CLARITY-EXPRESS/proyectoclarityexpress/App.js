//Inicializar
const express = require('express');
const app =  express();

//Usar formato Json
app.use(express.json());

//Rutas
app.get('/',(req,res)=>{
    res.send("Welcome to Express");
})

// Servidor
app.listen(3000,()=>{
    console.log("Server on port 3000");
})
