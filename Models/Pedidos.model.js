const mongoose = require('mongoose');
const productSchema = require('./Producto.model.js');

const pedidoSchema = new mongoose.Schema({
  nombreCliente: {
    type: String,
  },
  fechaPedido: { 
    type: Date,
    default: Date.now 
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