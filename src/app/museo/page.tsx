
import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";

export default function MuseoPage() {
  return (
    <>
      <Navbar />
      <section className="p-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-blue-gray-800 text-center">
          Museo de Nuestros Adultos Mayores
        </h1>

        <p className="mb-10 text-center text-gray-700 max-w-3xl mx-auto">
          El Museo de los Adultos Mayores es un espacio vivo de encuentro, memoria y dignidad. Aquí, cada objeto, 
          fotografía y relato es una ventana al pasado y una celebración del presente. Este museo no solo conserva
          la historia: la honra, la comparte y la transforma en aprendizaje para las nuevas generaciones.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Artesanía 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image/imagen22.jpg"
              alt="Tejido artesanal"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-blue-gray-800">Ruedas del recuerdo</h2>
              <p className="text-sm text-gray-600">Este vehículo centenario, ubicado en el jardín del Centro de Ancianos Vida Feliz, simboliza la transición entre los carruajes tradicionales y los primeros automóviles motorizados. Su presencia evoca historia y asombro intergeneracional. </p>
            </div>
          </div>

          {/* Artesanía 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image/imagen55.jpg"
              alt="Cerámica pintada"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-blue-gray-800">Campeón en múltiples disciplinas</h2>
              <p className="text-sm text-gray-600">Orgullo del Centro de Ancianos Vida Feliz, este residente ha conquistado trofeos en diversas disciplinas deportivas. Su constancia y espíritu competitivo motivan a quienes lo rodean y reflejan una vida dedicada al esfuerzo y la pasión</p>
            </div>
          </div>

          {/* Artesanía 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image/imagen21.jpg"
              alt="Accesorios en macramé"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-blue-gray-800">Memoria en vitrina</h2>
              <p className="text-sm text-gray-600">Una selección íntima de objetos y fotografías preservadas con cariño en el museo del Centro de Ancianos Vida Feliz. Radios, sombreros y retratos componen un mosaico de recuerdos que conectan generaciones con emoción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Museo - Sección de videos */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-gray-800 mb-6">Galería Audiovisual</h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <video
                controls
                className="w-full h-auto aspect-video"
                src="/videos/video5.mp4"
              >
              </video>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <video
                controls
                className="w-full h-auto aspect-video"
                src="/videos/video13.mp4"
              >
  
              </video>
            </div>

            {/* Video 3 
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <video
                controls
                className="w-full h-auto aspect-video"
                src="/videos/video1.mp4"
              >
              </video>
            </div>*/}

            {/* Video 4 
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <video
                controls
                className="w-full h-auto aspect-video"
                src="/videos/video4.mp4"
              >
              </video>
            </div>*/}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
