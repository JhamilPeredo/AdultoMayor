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
              En el Centro de Ancianos Vida Feliz, somos un espacio de afecto, respeto y comunidad dedicado al bienestar integral de los adultos mayores. Aquí encuentran un segundo hogar, donde cada persona es valorada, escuchada y acompañada. Promovemos un entorno activo, seguro y lleno de oportunidades para compartir historias, talentos y alegrías. Nuestro compromiso es cultivar vínculos intergeneracionales y brindar una vida plena, con dignidad y propósito.
            </SafeTypography>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Hero;
