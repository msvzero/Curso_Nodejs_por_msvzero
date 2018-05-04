const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Definimo las rutas
app.get('/', (request, response)=> {
    response.send("Bienvenido");
})