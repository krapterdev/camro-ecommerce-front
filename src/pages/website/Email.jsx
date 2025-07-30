import React, { useState } from "react";

function ContactForm() {
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
    const res = await fetch("http://localhost:8000/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log(result);
    alert("Mail Sent!");
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSendMail(); }}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="subject" placeholder="Subject" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <button type="submit">Send Mail</button>
    </form>
  );
}

export default ContactForm;
