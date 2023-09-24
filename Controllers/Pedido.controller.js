var Pedido = require('../Models/Pedidos.model.js');

exports.postPedido=async(req, res)=>{
    const nuevoPedido = await Pedido.create(req.body);
    res.status(201).json(nuevoPedido);
}

exports.getPedido=async(req, res)=>{
    const pedido= await Pedido.find();
    res.status(200).json(pedido);
}

exports.getPedidobyId=async(req, res)=>{
    const pedidos= await Pedido.findById(req.params.id);
    res.status(200).json(pedidos);
}

exports.deletePedido=async(req, res)=>{
    const pedidos= await Pedido.findByIdAndDelete(req.params.id);
    res.status(200).json(pedidos);
}