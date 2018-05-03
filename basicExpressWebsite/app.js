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
//Se especifica que el directorio public sera publico o el directorio estatico.
app.use(express.static(path.join(__dirname, 'public')));

//Configuramos el puerto de nuestro servidor y un mensaje como callback
app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})

//Creamos las rutas
app.get('/', (request, response) => {
    //console.log("Hello World");
    //response.send('<h1>Hello World - Bienvenido!!</h1>');
    response.render('index',{title:'Welcome'});
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/contact', (request, response) => {
    response.render('contact')
});

app.post('/contact/send', (request, response) => {
   // console.log('Message send');
   var mailOptions = {
        from: 'Bruno Garay <neurapp60@gmail.com>',
        to: 'msvzero@gmail.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: '+request.body.name+'Email: '+request.body.email+'Message: '+request.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>'+request.body.name+'</li><li>Email: '+request.body.email+'</li><li>Message: '+request.body.message+'</li></ul>'
    };

   var transporter = nodemailer.createTransport({
       //Se debe configurar la cuenta en google para permitir acceso de aplicaciones menos seguras.
       //Si cuenta con verificacion de dos pasos se debe deshabilitar
       service: 'gmail',
       auth:{
           user:'ejemplo@gmail.com',//debe ser real
           pass: '123456'// debe ser real
       }
   });
   transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: '+info.response);
      res.redirect('/');
    }
  });
})