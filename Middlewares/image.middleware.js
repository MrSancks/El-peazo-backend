//import path from 'path';
//import multer from 'multer';

// Configuración del almacenamiento para multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define la carpeta donde se almacenarán las imágenes
    cb(null, 'client/public/images');
  },
  filename: (req, file, cb) => {
    // Genera un nombre único para el archivo de imagen
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `${uniqueSuffix}.${fileExtension}`;
    cb(null, fileName);
  },
});

// Crea el middleware multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

// Controlador para subir una imagen
const uploadImage = (req, res) => {
  try {
    // Si multer ha procesado la carga de la imagen correctamente, req.file contendrá la información de la imagen
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha seleccionado ninguna imagen.' });
    }

    // Construye la URL de la imagen a partir de la ubicación en la que se almacenó
    const imageUrl = path.join('/public/images', req.file.filename);

    // Puedes guardar la URL de la imagen en la base de datos aquí si es necesario

    // Devuelve la URL de la imagen como respuesta
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'Error al subir la imagen.' });
  }
};

export default { upload, uploadImage };