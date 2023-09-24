const express = require('express')
const router= express.Router();
const pedidoController = require('../Controllers/Pedido.controller')

router.post('/pedido', pedidoController.postPedido);
router.get('/pedido', pedidoController.getPedido);
router.get('/pedido/:id', pedidoController.getPedidobyId);
router.delete('/pedido/:id', pedidoController.deletePedido);


module.exports= router;