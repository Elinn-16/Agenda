const express = require('express');
const app = express;
const mongoose = require('mongoose')
let port = 3000;
const uri= "mongodb+srv:agendahector:hector@cluster0.53qoo2m.mongodb.net/?retryWrites=true&w=majority";


app.listen(port, () => {
    console.log(`conectados en el puerto : ${port}`)
})
app.get(('/') ,(req,res) =>{
res.render("conectado");
})

mongoose. connect (uri, {useNewUrlParser: true,
})
.then (() => 
    console.log("conectado a la base de datos")
)
.catch((error) => 
    console.log("Tu error es  :" +error ));