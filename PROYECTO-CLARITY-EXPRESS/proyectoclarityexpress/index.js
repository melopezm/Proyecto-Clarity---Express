//Inicializar
const express = require('express');
const app =  express();

//Usar formato Json
app.use(express.json());

//Rutas
app.get('/',(req,res)=>{
    res.json({
        name: "Manuel"
    })
})

// Servidor
/*app.listen(3000,()=>{
    console.log("Server on port 3000");
})*/
app.listen(3000,"192.168.0.4",()=>{console.log("Server on port 3000")})