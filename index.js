const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 4000;

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/clientes', require('./routes/clientes'));

app.listen(port, () => {
    console.log('El servidor esta corriendo perfectamente')
})