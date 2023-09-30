const express = require('express')
const router= express.Router();
const productoController = require('../Controllers/Productos.controller.js')


router.post('/productos', productoController.postProducto);
router.get('/productos', productoController.getProducto);
router.get('/productos/:id', productoController.getProductobyId);
router.get('/productosForPedido/:id', productoController.getProductoForPedido);
router.delete('/productos/:id', productoController.deleteProducto);
router.put('/productos/:id/precio', productoController.putPrecioProducto);
router.get('/productosFavoritos', productoController.getProductosFavoritosCasa);

module.exports= router;