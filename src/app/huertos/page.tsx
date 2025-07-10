// app/huertos/page.tsx
import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";

function Card({ src, alt, title, description }: { src: string; alt: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-green-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function HuertosPage() {
  return (
    <>
      <Navbar />
      <section className="p-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-blue-gray-800 text-center">
          Huerto Vida Feliz
        </h1>

        <p className="mb-10 text-center text-gray-700 max-w-3xl mx-auto">
          Nuestro huerto es más que una fuente de alimentos; es un espacio terapéutico, educativo y comunitario. Se divide en cinco áreas fundamentales, trabajadas con amor por nuestros adultos mayores.
        </p>

        {/* FRUTICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Fruticultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/frutas/limon.jpg" alt="Limón" title="Limón" description="Fruta rica en vitamina C, utilizada para jugos y remedios naturales." />
            <Card src="/image/frutas/palta.jpg" alt="Palta" title="Palta" description="También conocida como aguacate, es fuente de grasas saludables." />
            <Card src="/image/frutas/mango.jpg" alt="Mango" title="Mango" description="Fruto dulce y tropical cultivado con cariño por nuestros adultos mayores." />
            <Card src="/image/frutas/banana1.jpg" alt="Banana" title="Banana" description="Alimento energético que aporta potasio y es fácil de digerir." />
            <Card src="/image/frutas/papaya.jpg" alt="Papaya" title="Papaya" description="Fruta rica en fibra, ideal para la digestión." />
            <Card src="/image/frutas/cacerola.jpg" alt="Cacerola" title="Cacerola" description="Cultivo tradicional de la región con múltiples usos alimenticios." />
          </div>
        </div>

        {/* HORTICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Horticultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/horticultura/cebolla.jpg" alt="Cebolla" title="Cebolla" description="Base de la cocina tradicional, cultivada con cuidado diario." />
            <Card src="/image/horticultura/acelga.jpg" alt="Acelga" title="Acelga" description="Verdura rica en hierro y fibra, fácil de cultivar todo el año." />
            <Card src="/image/horticultura/perejil.jpg" alt="Perejil" title="Perejil" description="Hierba aromática esencial en nuestra cocina local." />
            <Card src="/image/horticultura/oregano.jpg" alt="Orégano" title="Orégano" description="Hierba seca de gran aroma usada en salsas y remedios." />
            <Card src="/image/horticultura/cilantro.jpg" alt="Cilantro" title="Cilantro" description="De sabor intenso, muy usado en la gastronomía boliviana." />
            <Card src="/image/horticultura/espinaca.jpg" alt="Espinaca" title="Espinaca" description="Fuente de hierro, muy beneficiosa para la salud de los adultos mayores." />
            <Card src="/image/horticultura/calabaza.jpg" alt="Calabaza" title="Calabaza" description="Fruto grande, nutritivo y versátil en la cocina." />
            <Card src="/image/horticultura/zanahoria.jpg" alt="Zanahoria" title="Zanahoria" description="Rica en betacarotenos, buena para la vista y el sistema inmune." />
            <Card src="/image/horticultura/repollo.jpg" alt="Repollo" title="Repollo" description="Verdura de hojas apretadas, base para platos como el chucrut." />
            <Card src="/image/horticultura/pepino.jpg" alt="Pepino" title="Pepino" description="Fresco y liviano, ideal para ensaladas y jugos naturales." />
          </div>
        </div>

        {/* FLORICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Floricultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/floricultura/rosas.jpg" alt="Rosas" title="Rosas" description="Flor símbolo de amor y belleza, cultivada con esmero en el jardín." />
            <Card src="/image/floricultura/jazmin.jpg" alt="Jazmín" title="Jazmín" description="Flor blanca de aroma suave, ideal para relajar el espíritu." />
            <Card src="/image/floricultura/santarita.jpg" alt="Santarita" title="Santarita" description="Planta trepadora de vibrante color que embellece el entorno." />
            <Card src="/image/floricultura/pedrosegundo.jpg" alt="Pedro Segundo" title="Pedro Segundo" description="Flor popular que representa la tradición local." />
          </div>
        </div>

        {/* PLANTAS MEDICINALES */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Plantas Medicinales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/medicinales/sabila.jpg" alt="Sábila" title="Sábila" description="Planta suculenta de usos cicatrizantes y dermatológicos." />
            <Card src="/image/medicinales/pinon.jpg" alt="Piñón" title="Piñón" description="Usado para dolores musculares y masajes naturales." />
            <Card src="/image/medicinales/cedron.jpg" alt="Cedrón" title="Cedrón" description="Infusión calmante muy usada para dormir bien." />
            <Card src="/image/medicinales/matico.jpg" alt="Matico" title="Matico" description="Hierba curativa usada en heridas y problemas digestivos." />
            <Card src="/image/medicinales/guayaba.jpg" alt="Guayaba" title="Guayaba" description="Sus hojas se usan para hacer té contra diarreas y fiebre." />
            <Card src="/image/medicinales/paico.jpg" alt="Paico" title="Paico" description="Planta milenaria contra parásitos y para calmar dolores estomacales." />
            <Card src="/image/medicinales/anamo.jpg" alt="Anamo" title="Anamo" description="Hierba silvestre con propiedades revitalizantes." />
            <Card src="/image/medicinales/colonia.jpg" alt="Colonia" title="Colonia" description="Aromática relajante muy cultivada en los patios del centro." />
            <Card src="/image/medicinales/moringa.jpg" alt="Moringa" title="Moringa" description="Considerada superalimento por sus nutrientes y antioxidantes." />
          </div>
        </div>

        {/* ABONOS ORGÁNICOS */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Producción de Abonos Orgánicos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/abono/composta.jpg" alt="Composta" title="Composta Vegetal" description="Mezcla de restos vegetales descompuestos que mejora el suelo." />
            <Card src="/image/abono/humus.jpg" alt="Humus de lombriz" title="Humus de lombriz" description="Abono orgánico de alta calidad producido por lombrices rojas californianas." />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
