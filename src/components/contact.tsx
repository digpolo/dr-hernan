'use client'
import React, { useState, ChangeEvent, FormEvent } from "react"

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

export const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [status, setStatus] = useState<Status>({});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(formDetails)
      });

      setButtonText("Send");
      const result = await response.json();

      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later."
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later."
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <div>
        <div className="align-items-center">
          <div>
            <div>
              <div className={""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </div>
                    <div className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) =>
                          onFormUpdate("email", e.target.value)
                        }
                      />
                    </div>
                    <div className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) =>
                          onFormUpdate("phone", e.target.value)
                        }
                      />
                    </div>
                    <div className="px-1">
                      <textarea
                        rows={6}
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
