const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hola' , (req, res) =>{
    res.send('ruta Hola');
});

app.get('/adios' , (req, res) =>{
    res.send('ruta Adios');
});

app.post('/registro' , (req, res) =>{
    res.send('recibiendo informacion de registro');
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
