const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            require: true
        },
        descripcion:{
            type: String,
            require: true
        },
        precio:{
            type: Number,
            require: true
        }

    }
);

const Producto=mongoose.model('Productos', productSchema);
module.exports=Producto;