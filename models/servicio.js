// models/servicio.model.js
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombreNegocio: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  tipoServicio: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Servicio', servicioSchema);
