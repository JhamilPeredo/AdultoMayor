"use client";

import Image from "next/image";
import { SafeButton, SafeTypography } from "@/components/SafeMaterial";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <div id="inicio" style={{ scrollMarginTop: "80px" }}>
      {/* Imagen de fondo sola */}
      <header
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/imagen52.jpg')",
          height: "550px",
        }}
      />

      {/* Sección principal: avatar y texto */}
      <section className="container mx-auto px-8 mt-[80px] lg:px-48">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen avatar */}
          <div className="w-[340px] h-[300px] shrink-0 border-4 border-green-600 rounded-xl p-1 bg-white">
            <Image
              width={1024}
              height={1024}
              alt="avatar"
              src="/image/logovida.jpg"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="max-w-xl">
            <SafeTypography as="span" variant="h5" className="text-3xl">
              Quiénes Somos
            </SafeTypography>

            <SafeTypography variant="lead" className="text-gray-700 mt-6">
              Somos un espacio de amor, cuidado y comunidad para adultos mayores.
              Aquí encuentran un segundo hogar donde se sienten acompañados,
              valorados y activos.
            </SafeTypography>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Hero;
