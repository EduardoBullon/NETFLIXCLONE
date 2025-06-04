import { useState } from "react";
import { toast } from "react-toastify";
import '../css/modules/Contact.css'; 

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "El nombre es obligatorio";
    if (!formData.email.trim()) errs.email = "El correo es obligatorio";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) errs.email = "Correo inválido";
    }
    if (!formData.message.trim()) errs.message = "El mensaje es obligatorio";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="error-name"
          required
        />
        {errors.name && <p id="error-name" className="error-message">{errors.name}</p>}

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="error-email"
          required
        />
        {errors.email && <p id="error-email" className="error-message">{errors.email}</p>}

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          aria-describedby="error-message"
          required
        />
        {errors.message && <p id="error-message" className="error-message">{errors.message}</p>}

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </main>
  );
}
