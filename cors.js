const corsOptions = {
    origin: 'https://hostingfrontexpres.web.app/', // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el uso de cookies y encabezados de autorización
    optionsSuccessStatus: 204, // Responde con un código 204 si la pre-solicitud CORS es exitosa
  };
  
  app.use(cors(corsOptions));
  