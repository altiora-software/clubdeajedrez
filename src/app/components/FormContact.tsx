"use client";

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envío de formulario
    console.log(formData);
  };

  return (
    <section id="contacto" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl text-center mb-12 text-yellow-800">
          Comunícate con Nosotros
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-yellow-800">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded text-yellow-900"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-yellow-800">
              Teléfono o WhatsApp
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded text-yellow-900"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-yellow-800">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded text-yellow-900"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Información de Contacto */}
        <div className="mt-8 text-center text-gray-700">
          <p>
            <strong>WhatsApp:</strong> 3400582778 / 3415836259
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/plazachess.vc"
              className="text-yellow-800"
            >
              PlazaChess.vc
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://facebook.com/plazachess"
              className="text-yellow-800"
            >
              PlazaChess
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
