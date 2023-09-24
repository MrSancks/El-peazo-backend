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
  
  productos: [
    {
      nombre: String,
      precio: Number,
      cantidad: Number,
    }
  ],

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

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;