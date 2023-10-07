import axios from 'axios';
const API_KEY = '1a4e181b39bf999c3f0d6b1b39c0aba7';

const sendEmail = async ({ nombre, numero, mensaje }: { nombre: string, numero: string, mensaje: string }): Promise<boolean> => {
  // Configurar las credenciales del servidor de correo electrónico
  
  const config = {
    
    headers: {
      "Authorization": `Bearer 1a4e181b39bf999c3f0d6b1b39c0aba7`,
    },
  };

  // Enviar el correo electrónico
  const response = await axios.post(
    `https://send.api.mailtrap.io/api/send`,
    {
      from: "info@drhernanjojoa.com",
      to: 'digpolo@gmail.com',
      subject: "Mensaje de contacto",
      text: `
        nombre: ${nombre}
        numero: ${numero}
        mensaje: ${mensaje}
      `,
    },
    config
  );

  // Comprobar el estado de la respuesta
  if (response.status === 201) {
    // El correo electrónico se envió correctamente
    return true;
  } else {
    // Se produjo un error al enviar el correo electrónico
    return false;
  }
};

export default sendEmail;


// import { MailtrapClient } from "mailtrap"

// /**
//  * For this example to work, you need to set up a sending domain,
//  * and obtain a token that is authorized to send from the domain.
//  */

// const TOKEN = "<714bc562bbe29163dc5d33d011cff212>";
// const SENDER_EMAIL = "<contacto@drhernanjojoa.com>";
// const RECIPIENT_EMAIL = "<digpolo@gmail.com>";

// const client = new MailtrapClient({ token: TOKEN });

// const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from Mailtrap!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);