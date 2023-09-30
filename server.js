const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const app= express()
const port=8080
const uri = "mongodb+srv://camilo:1234@peazo.ukoavzu.mongodb.net/?retryWrites=true&w=majority";
const routes = require('./Routes/Producto.routes.js')
const Pedido = require('./Routes/Pedido.routes.js')




mongoose.connect(uri);
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes)
app.use('/api', Pedido)




app.listen(port,()=>{
    console.log(`servidor lanzado en ${port}`)
})