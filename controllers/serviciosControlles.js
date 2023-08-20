// controllers/servicios.controller.js
const Servicio = require('../models/servicio');

// Función para obtener todos los servicios
exports.obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los servicios' });
  }
};

// Función para obtener un servicio por su ID
exports.obtenerServicioPorId = async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el servicio' });
  }
};

// Función para crear un nuevo servicio
exports.crearServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    const servicioGuardado = await nuevoServicio.save();
    res.status(201).json(servicioGuardado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el servicio' });
  }
};

// Función para actualizar un servicio por su ID
exports.actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(servicioActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el servicio' });
  }
};

// Función para eliminar un servicio por su ID
exports.eliminarServicio = async (req, res) => {
  try {
    const servicioEliminado = await Servicio.findByIdAndDelete(req.params.id);
    if (servicioEliminado) {
      res.json({ mensaje: 'Servicio eliminado correctamente' });
    } else {
      res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el servicio' });
  }
};
