const path = require('path');//trabaja con rutas
const express = require("express"); //creacion de servidores
const cors = require('cors');//permite el cambio de recursos  entre dominios 

const PORT = process.env.PORT || 3001 //en donde se ejecuta el servidor 

const app = express(); //creacion de una instancia de express
app.use(cors())//habilita las solicitudes entre dominios

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });//se establece una ruta para habilitar las solicitudes

  app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
  })