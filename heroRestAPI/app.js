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
});

app.get('/hero', (request, response)=>{
    Hero.find().then((heros) => {
        response.send(heros)
    }, (error) =>{
        response.status(400).send(error);
    })

});

app.get('/hero/:id', (request, response) => {
    //En este ejemplo se omite la validacion del id
    let heroId = request.params.id;
    Hero.findById(heroId).then((hero) => {
        if(!hero){
            response.status(400).send();
        }
        response.send(hero);
    }, (error) => {
        response.status(400).send(error);
    });
});

app.put('/hero/:id', (request, response) => {
    let update = {
        nombre: request.body.nombre,
        fuerza: request.body.fuerza,
        velocidad: request.body.velocidad
    }
    //En este ejemplo se omite la verificacion del id
    let heroId = request.params.id;
    Hero.findByIdAndUpdate(heroId, update, {new: true}).then((hero) => {
        if(!hero){
            return response.status(404).send();
        }
        response.send(hero);
    }, (error) => {
        response.status(400).send(error);
    })
});

app.delete('/hero/:id', (request, response) => {
    let heroId = request.params.id;
    Hero.findByIdAndRemove(heroId).then((hero) => {
        if(!hero){
            return response.status(404).send();
        }
        response.send(hero);
    },  (error) => {
        response.status(400).send(error);
    })
});