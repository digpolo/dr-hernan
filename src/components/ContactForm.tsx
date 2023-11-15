import React, { useState, FormEvent } from "react";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  check: string
}

const ContactForm: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    check: ''
  };
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Agendar cita");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Enviando datos...");
    let response = await fetch("https://us-central1-serverapi-92b0d.cloudfunctions.net/app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Datos enviados");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Ya tenemos tús datos, nos comunicaremos pronto" });
    } else {
      setStatus({ success: false, message: "Algo salió mal, intentalo más tarde", });
    }
  };

  return (
    <div className="flex flex-col  mx-4  px-4">
      <h2 className=' font-semibold text-[30px] text-white'>Cuéntanos cómo podemos ayudarte</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Nombre y Apellido
          </label>
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Nombre y apellido"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
            className={`w-full rounded-xl bg-gray-900 border-none font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 `}
          />

        </div>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Celular
          </label>
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Número de celular"
            onChange={(e) => onFormUpdate("phone", e.target.value)}
            className={`w-full rounded-xl border-none  bg-gray-900 font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Correo electrónico
          </label>
          <input
            type="email"
            value={formDetails.email}
            placeholder="Correo electrónico"
            onChange={(e) => onFormUpdate("email", e.target.value)}
            className={`w-full rounded-xl border-none  bg-gray-900 font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Motivo de consulta
          </label>
          <textarea
            rows={3}
            value={formDetails.message}
            placeholder="Motivo de consulta"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            className={`w-full rounded-[12px] border-none bg-gray-900 font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 `}
          ></textarea>
        </div>
        <div className='flex gap-4'>
          <input
            id="comments"
            value="si"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            onChange={(e) => onFormUpdate("check", e.target.value)}
            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label>Me gustaria registrarme con mi número de celular para recibir el boletín  de Dr. Hernan Jojoa con actualizaciones, recursos valiosos y consejos útiles.</label>
        </div>
        <button className="bg-blue-700 py-4 rounded-lg my-5 font-medium text-lg  py-10" type="submit">{buttonText}</button>
        {status.message && (
          <div className="row text-center text-blue">
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
