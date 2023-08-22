const express = require('express');
const router = express.Router();
const torresController = require('../controllers/torresController');

// Rutas para el componente de torres
router.get('/', torresController.obtenerTorres);
router.get('/:id', torresController.obtenerTorrePorId);
router.post('/', torresController.crearTorre);
router.put('/:id', torresController.actualizarTorre);
router.delete('/:id', torresController.eliminarTorre);
router.put('/marcar-mensaje-enviado/:id', torresController.marcarMensajeEnviado);

module.exports = router;