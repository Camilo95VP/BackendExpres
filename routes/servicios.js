// routes/servicios.js
const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosControlles');

// Rutas para el componente de servicios
router.get('/', serviciosController.obtenerServicios);
router.get('/:id', serviciosController.obtenerServicioPorId);
router.post('/', serviciosController.crearServicio); // Línea 7
router.put('/:id', serviciosController.actualizarServicio);
router.delete('/:id', serviciosController.eliminarServicio);

module.exports = router;

