"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "@/components";
import { SafeButton } from "@/components/SafeMaterial";

export default function VoluntariadosPage() {
  const [form, setForm] = useState({
    institucion: "",
    responsable: "",
    telefono: "",
    correo: "",
    cantidad: "",
    fecha: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setEnviado(true);
    // Aquí podrías enviar los datos a un backend o servicio externo
  };

  return (
    <>
      <Navbar />

      <section className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-gray-800 mb-10">
          Registro de Voluntariados
        </h1>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Completa este formulario y suma tu institución al compromiso solidario. Participe como voluntario(a) en las actividades del Centro de Ancianos Vida Feliz, promoviendo compañía, alegría y bienestar para nuestros adultos mayores.

        </p>

        {enviado ? (
          <div className="text-green-600 text-center text-lg font-semibold">
            ¡Gracias por registrarte! Nos pondremos en contacto muy pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6 border border-gray-500">
            <div>
              <label className="block font-medium mb-1">Nombre de la institución</label>
              <input
                type="text"
                name="institucion"
                required
                value={form.institucion}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Nombre del responsable</label>
              <input
                type="text"
                name="responsable"
                required
                value={form.responsable}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Teléfono de contacto</label>
              <input
                type="tel"
                name="telefono"
                required
                value={form.telefono}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                required
                value={form.correo}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Cantidad de participantes</label>
              <input
                type="number"
                name="cantidad"
                min="1"
                required
                value={form.cantidad}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Fecha propuesta de visita</label>
              <input
                type="date"
                name="fecha"
                required
                value={form.fecha}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Mensaje adicional (opcional)</label>
              <textarea
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>

            <SafeButton type="submit" color="blue" fullWidth>
              Enviar solicitud
            </SafeButton>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}
