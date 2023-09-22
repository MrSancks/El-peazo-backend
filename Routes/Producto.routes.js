const express = require('express')
const router= express.Router();
const productoController = require('../Controllers/Productos.controller.js')

router.post('/productos', productoController.postProducto);
router.get('/productos', productoController.getProducto);
router.get('/productos/:id', productoController.getProductobyId);
router.delete('/productos/:id', productoController.deleteProducto);


module.exports= router;