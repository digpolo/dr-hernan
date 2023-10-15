import React, { useState, FormEvent } from "react";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <p>We're here to help if you have any questions</p>
      <form className="form-inner" >
        <div className="row">
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />
        </div>
        <div className="row">
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
        </div>
        <div className="row">
          <textarea
            rows={6}
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{buttonText}</button>
        {status.message && (
          <div className="row">
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
