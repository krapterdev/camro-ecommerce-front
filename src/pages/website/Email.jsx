import React, { useState } from "react";

function ContactForm() {

    const webURL = import.meta.env.VITE_REACT_APP_API_BASE_URL_APIS;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMail = async () => {
    const res = await fetch(`${webURL}send-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Sahil Kumar",
        email: "sahil@webmartindia.in",
        phone: "9876543210",
        message: "Testing email from React!",
        subject: "New Enquiry from Contact Form",
      }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMail();
      }}
    >
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="subject" placeholder="Subject" onChange={handleChange} />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send Mail</button>
    </form>
  );
}

export default ContactForm;
