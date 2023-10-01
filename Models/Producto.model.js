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
        },
        categoria:{
            type: String,
            require: true,
        },
        origen:{
            type: String,
            require: true,
        },
        cantidadDisponible:{
            type: Number,
            require: true,
        },
        proveedor:{
            type: String,
            require: true,
        },
        peso:{
            type: Number,
            require: true,
        },
        calidad:{
            type: String,
            require: true,
        },
        fechaLlegada:{
            type: Date,
            default: Date.now,
            require: true,
        },
        masComprados:{
            type: Number,
            require: true,
        },
        favoritosCasa:{
            type: Boolean,
            require: true,
        },
        imagen: {
            type: String,
            required: true,
        },

    }
);


const Producto=mongoose.model('Productos', productSchema);
module.exports=Producto;