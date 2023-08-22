const mongoose = require("mongoose");

const torreSchema = new mongoose.Schema({
  residencia: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apto: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  nombrePersona: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
  nivelInfestacion: {
    type: String,
    required: true,
    enum: ["baja", "moderada", "alta", "muyalta"], // Opciones permitidas
  },
  recomendaciones: {
    type: String,
    required: true,
  },
  estadoMensaje: {
    type: String,
    default: "sin enviar", // Valor predeterminado "sin enviar"
    enum: ["sin enviar", "enviado"], // Opciones permitidas
  },
});

module.exports = mongoose.model("Torre", torreSchema);
