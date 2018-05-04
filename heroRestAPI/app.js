const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const { mongoose } = require('./conexion');
const { Hero } = require('./model/Hero');


const app = express();
//Configuracion de midleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Definimo las rutas
app.get('/', (request, response)=> {
    response.send("Bienvenido");
});

app.post('/hero', (request, response) => {
   // console.log(request.body);
    let hero = new Hero({
        nombre: request.body.nombre,
        fuerza: request.body.fuerza,
        velocidad: request.body.velocidad
    });
    hero.save().then((hero) => {
        response.send(hero);
    }, (error) => {
        response.status(400).send(error);
    })
})