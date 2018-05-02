//Incluimos los modulos necesarios
const express = require('express');
const path = require('path');
/**
 * body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body 
 */
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//Inicializamos nuestra app
const app = express();

//Definimos los middleware que vamos a utilizar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Configuramos el puerto de nuestro servidor y un mensaje como callback
app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})

//Creamos la rutas
app.get('/', (request, response) => {
    //console.log("Hello World");
    response.send('Hello World - Bienvenido!!');
})