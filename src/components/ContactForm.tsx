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
    let response = await fetch("http://localhost:3001/api/contact", {
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
    <div className="flex flex-col  justify-between  mx-4 mx-auto max-w-xl px-4 ">
      <h2 className='py-10 font-semibold text-[30px]'>Cuéntanos cómo podemos ayudarte</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Escribe tú nombre completo
          </label>
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Nombre completo"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
            className={`w-full rounded-[12px] bg-grey font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

        </div>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Escribe tú número de celular
          </label>
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Número de celular"
            onChange={(e) => onFormUpdate("phone", e.target.value)}
            className={`w-full rounded-[12px] bg-grey font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="row">
          <label
            htmlFor={"name"}
            className={`block text-sm font-light  text-white`}
          >
            Cual es el motivo de consulta
          </label>
          <textarea
            rows={3}
            value={formDetails.message}
            placeholder="Motivo de consulta"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            className={`w-full rounded-[12px] bg-grey font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
        <button className="bg-[#333333] py-4 rounded-lg my-5 font-medium text-lg  py-10" type="submit">{buttonText}</button>
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
