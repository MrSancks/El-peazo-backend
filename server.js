const express = require('express');
const app= express()
const port=8080

app.get('/',(req,res)=>{
    res.send('?????')
})

app.listen(port,()=>{
    console.log(`servidor lanzado en ${port}`)
})