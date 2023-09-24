var Producto = require('../Models/Producto.model.js');

exports.postProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto', error });
  }
};

exports.getProducto = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos', error });
  }
};

exports.getProductobyId = async (req, res) => {
  try {
    const productos = await Producto.findById(req.params.id);
    if (!productos) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto', error });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const productos = await Producto.findByIdAndDelete(req.params.id);
    if (!productos) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
  }
};


exports.getProductoForPedido=async(req, res)=>{
    const idProducto = req.params.id;
  try {
    const producto = await Producto.findById(idProducto).select('nombre descripcion precio');
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto', error });
  }
}


exports.putPrecioProducto = async (req, res) => {
    try {
      const idProducto = req.params.id;
      const nuevoPrecio = req.body.precio;
  
      const producto = await Producto.findById(idProducto);
      if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  
      producto.precio = nuevoPrecio;
      await producto.save();
  
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar el precio del producto', error });
    }
  };