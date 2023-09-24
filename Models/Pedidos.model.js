const mongoose = require('mongoose');
const productSchema = require('./Producto.model.js');

const pedidoSchema = new mongoose.Schema({
  idPedido: { 
    type: String, required: true 
  },
  fechaPedido: { 
    type: Date, default: Date.now 
  },
  nombreCliente: {
    type: String,
  },
  productos: [productoSchema],

  metodoPago: {
    type: String,
  },
  direccionEntrega: {
    type: String,
  },
  costoTotal: {
    type: Number,
  },
  comentarios: {
    type: String,
  },
});

// Crear el modelo del Pedido
const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;s