const path = require('path');//trabaja con rutas
const express = require("express"); //creacion de servidores
const cors = require('cors');//permite el cambio de recursos  entre dominios 
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require('dotenv').config()

const PORT = process.env.PORT || 3001 //en donde se ejecuta el servidor 

const app = express(); //creacion de una instancia de express
app.use(cors())//habilita las solicitudes entre dominios
app.use(bodyParser.json())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});//se establece una ruta para habilitar las solicitudes

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  }
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('ready to send')
  }
})

app.post('/api/contact', bodyParser.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.firstName + req.body.lastName
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if(error) {
      res.json(error)
    }else {
      res.json({code: 200, status: 'Message sent'})
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is online on port: ${PORT}`)
})