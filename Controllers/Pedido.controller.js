const Pedido = require('../Models/Pedidos.model');
const Producto = require('../Models/Producto.model');

exports.getPedido = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los pedidos', error });
  }
};

exports.getPedidobyId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el pedido', error });
  }
};

exports.deletePedido = async (req, res) => {
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }
    res.status(200).json({ mensaje: 'Pedido eliminado', pedido: pedidoEliminado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el pedido', error });
  }
};


exports.postPedido = async (req, res) => {
  try {
    
    const { nombreCliente, productos, metodoPago, direccionEntrega, costoTotal, comentarios } = req.body;

    const productosValidos = await Promise.all(
      productos.map(async (productoInfo) => {
        const productoExistente = await Producto.findById(productoInfo.id);
        if (!productoExistente) {
          return null;
        }
        
        return {
          producto: productoExistente,
          cantidad: productoInfo.cantidad,
        };
      })
    );

    
    if (productosValidos.some((producto) => !producto)) {
      return res.status(404).json({ mensaje: 'Uno o más productos no encontrados' });
    }
    const nuevoPedido = new Pedido({
      nombreCliente,
      productos: productosValidos.map((productoInfo) => ({
        nombre: productoInfo.producto.nombre,
        precio: productoInfo.producto.precio,
        cantidad: productoInfo.cantidad,
      })),
      metodoPago,
      direccionEntrega,
      costoTotal,
      comentarios,
    });

    await nuevoPedido.save();

    res.status(201).json({ mensaje: 'Pedido creado exitosamente', pedido: nuevoPedido });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el pedido con productos', error });
  }
};