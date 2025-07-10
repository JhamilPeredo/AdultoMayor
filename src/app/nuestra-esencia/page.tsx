// app/nuestra-esencia/page.tsx
import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";

export default function NuestraEsenciaPage() {
  return (
    <>
      <Navbar />
      <section className="p-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-blue-gray-800 text-center">
          Nuestra Esencia
        </h1>

        {/* Misión */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <Image
            src="/image/imagen34.jpg"
            alt="Misión"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">Misión</h2>
            <p className="text-gray-700 leading-relaxed">
             Somos el centro de Ancianos "Vida Feliz", que velamos por el bienestar físico, mental y espiritual de nuestros abuelitos, de las personas de la tercera edad.
             Nuestros pilares fundamentales son: el respeto, mutua cooperación,compasión y cuidado integral sirviendo a ancianitos (as) de diferentes etnias, religión y clase social.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-8">
          <Image
            src="/image/imagen48.jpg"
            alt="Visión"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">Visión</h2>
            <p className="text-gray-700 leading-relaxed">
              El centro de Ancianos "Vida Feliz" llegará a ser una organizacion solcial al servicio y apoyo integral de las personas de la tercera edad, contribuyendo a una mejor calidad de vida en esta sociedad para que ellos vivan en integridad, justicia y amor.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/image/imagen36.jpg"
            alt="Valores"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">Valores</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>La Claridad y el servicio</li>
              <li>El Respeto asi mismo y al prójimo </li>
              <li>La solidaridad con el que sufre</li>
              <li>La cooperacion mutua</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
