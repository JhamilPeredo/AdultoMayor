"use client";

import React from "react";
import {
  SafeTypography,
  SafeIconButton,
} from "@/components/SafeMaterial";
import {
  PhoneIcon,
  EnvelopeIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";

export function ContactForm() {
  return (
    <section className="px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Mapa (más pequeño) */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-md max-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.159932349016!2d-63.3774175!3d-17.9916951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1b8117aa4d617%3A0x50e01485040da235!2sCentro%20de%20Ancianos%20Vida%20Feliz!5e0!3m2!1ses!2sbo!4v1720462371685!5m2!1ses!2sbo"
              className="w-full h-full min-h-[300px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Información de contacto (más pequeño y contenido centrado) */}
          <div className="w-full max-h-[400px] rounded-lg bg-gray-900 flex flex-col justify-center items-center p-8 shadow-md">
            <div className="w-full max-w-md">
              <SafeTypography variant="h4" color="white" className="mb-4 text-center">
                Información de Contacto
              </SafeTypography>
              <SafeTypography
                variant="lead"
                className="mb-8 text-base !text-gray-400 text-center"
              >
                puedes seguirnos en las redes sociales.
              </SafeTypography>

              <div className="mb-4 flex gap-4 items-center justify-center">
                <PhoneIcon className="h-6 w-6 text-white" />
                <SafeTypography variant="h6" color="white">
                  +591 70882168
                </SafeTypography>
              </div>
              <div className="mb-4 flex gap-4 items-center justify-center">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <SafeTypography variant="h6" color="white">
                  centrodeancianosvidafeliz@gmail.com
                </SafeTypography>
              </div>
              <div className="mb-8 flex gap-4 items-center justify-center">
                <FaInstagram className="h-6 w-6 text-white" />
                <SafeTypography variant="h6" color="white">
                  centrodeancianosvidafeliz
                </SafeTypography>
              </div>

              <div className="flex justify-center gap-4">
                <SafeIconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </SafeIconButton>
                <SafeIconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </SafeIconButton>
                <SafeIconButton variant="text" color="white">
                  <i className="fa-brands fa-whatsapp text-lg" />
                </SafeIconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
