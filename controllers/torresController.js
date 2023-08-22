const Torre = require("../models/torres");

// Controlador para obtener todas las torres
exports.obtenerTorres = async (req, res) => {
  try {
    const torres = await Torre.find();
    res.json(torres);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las torres" });
  }
};

// Controlador para obtener una torre por ID
exports.obtenerTorrePorId = async (req, res) => {
  try {
    const torre = await Torre.findById(req.params.id);
    if (!torre) {
      return res.status(404).json({ error: "Torre no encontrada" });
    }
    res.json(torre);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la torre" });
  }
};

// Controlador para crear una nueva torre
// Controlador para crear una nueva torre
exports.crearTorre = async (req, res) => {
  const {
    residencia,
    nombre,
    apto,
    fecha,  // La fecha está en formato "2023-08-21"
    nombrePersona,
    celular,
    nivelInfestacion,
    recomendaciones,
  } = req.body;

  try {
    console.log("fecha recibida:"+ fecha)
    const nuevaTorre = new Torre({
      residencia,
      nombre,
      apto,
      fecha,  // La fecha se mantiene en formato "2023-08-21"
      nombrePersona,
      celular,
      nivelInfestacion,
      recomendaciones,
      estadoMensaje: "sin enviar",
    });

    const torreGuardada = await nuevaTorre.save();
    res.status(201).json(torreGuardada);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la torre" });
  }
};


// Controlador para actualizar una torre por ID
exports.actualizarTorre = async (req, res) => {
  const {
    residencia,
    nombre,
    apto,
    fecha,
    nombrePersona,
    celular,
    nivelInfestacion,
    recomendaciones,
    estadoMensaje,
  } = req.body;

  try {
    const torreActualizada = await Torre.findByIdAndUpdate(
      req.params.id,
      {
        residencia,
        nombre,
        apto,
        fecha,
        nombrePersona,
        celular,
        nivelInfestacion,
        recomendaciones,
        estadoMensaje,
      },
      { new: true }
    );

    if (!torreActualizada) {
      return res.status(404).json({ error: "Torre no encontrada" });
    }

    res.json(torreActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la torre" });
  }
};

// Controlador para eliminar una torre por ID
exports.eliminarTorre = async (req, res) => {
  try {
    const torreEliminada = await Torre.findByIdAndRemove(req.params.id);

    if (!torreEliminada) {
      return res.status(404).json({ error: "Torre no encontrada" });
    }

    res.json({ message: "Torre eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la torre" });
  }
};

// Controlador para marcar un mensaje como enviado
exports.marcarMensajeEnviado = async (req, res) => {
  try {
    const torre = await Torre.findById(req.params.id);

    if (!torre) {
      return res.status(404).json({ error: "Torre no encontrada" });
    }

    // Marca el mensaje como enviado
    torre.estadoMensaje = "enviado";
    await torre.save();

    res.json({ message: "Mensaje marcado como enviado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al marcar el mensaje como enviado" });
  }
};

