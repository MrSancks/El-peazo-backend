var Producto = require('../Models/Producto.model.js');

exports.postProducto=async(req, res)=>{
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
}

exports.getProducto=async(req, res)=>{
    const productos= await Producto.find();
    res.status(200).json(productos);
}

exports.getProductobyId=async(req, res)=>{
    const productos= await Producto.findById(req.params.id);
    res.status(200).json(productos);
}

exports.deleteProducto=async(req, res)=>{
    const productos= await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json(productos);
}