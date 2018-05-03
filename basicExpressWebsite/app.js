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
//We need to tell Pug which folder the template files will be in
app.set('views', path.join(__dirname, 'views'));
//We also need to set the view engine
app.set('view engine', 'pug');

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
    //response.send('<h1>Hello World - Bienvenido!!</h1>');
    response.render('index');
})