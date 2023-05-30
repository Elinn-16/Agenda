const express = require('express');
const app = express;
const mongoose = require('mongoose')
const c = document.getElementsByClassName("create")
let port = 3000;

app.listen(port, () => {
    console.log("tu servidor ha sido conectado correctamente");
})
app.get(('/') ,(req,res) =>{
res.render("conectado");
})
//crear una nueva nota
function creit (c){
    if (c) {
    const NoteSchema =new mongoose.Schema({
        Titulo :{type:String,require:"poner un titulo a la nota"},
        Fecha:{type:Number},
        Nota:{type:String,require:"poner el cuerpo de la nota"},
    })
}
}
mongoose. connect ("mongodb+srv:agendahector:hector@cluster0.53qoo2m.mongodb.net/?retryWrites=true&w=majority")
.then (() => 
    console.log("conectado a la base de datos")
)
.catch((error) => 
    console.log("Tu error es  :" +error ));

