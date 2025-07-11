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
         Más que una fuente de alimentos, nuestro huerto es un lugar de sanación, aprendizaje y encuentro. Dividido en cinco áreas esenciales, cada rincón es cultivado con dedicación por nuestros adultos mayores, quienes siembran amor, experiencia y comunidad en cada brote.
        </p>

        {/* FRUTICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Fruticultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/frutas/limon.jpg" alt="Limón" title="Limón" description="Fruta cítrica refrescante, rica en vitamina C. Se cultiva para preparar jugos naturales, infusiones y remedios caseros que refuerzan el sistema inmunológico." />
            <Card src="/image/frutas/palta.jpg" alt="Palta" title="Palta" description="Fruto suave y nutritivo que aporta grasas buenas y energía natural. Su textura cremosa y sabor delicado lo convierten en un ingrediente estrella en ensaladas." />
            <Card src="/image/frutas/mango.jpg" alt="Mango" title="Mango" description="Fruta tropical de sabor dulce e intenso, cultivada con cariño por nuestros adultos mayores.Es una fuente de fibra, vitaminas y momentos felices compartidos." />
            <Card src="/image/frutas/banana1.jpg" alt="Banana" title="Banana" description="Rica en potasio y carbohidratos, es una fruta energética y de fácil digestión. Su cultivo fortalece la alimentación y el vínculo con la tierra." />
            <Card src="/image/frutas/papaya.jpg" alt="Papaya" title="Papaya" description="Su pulpa suave es ideal para la digestión. Rica en fibra, enzimas y nutrientes esenciales, se cultiva como parte de una alimentación saludable." />
            <Card src="/image/frutas/cacerola.jpg" alt="Cacerola" title="Cacerola" description="Cultivo tradicional de la región, con valor cultural y gastronómico. Usado en sopas, guisos y remedios, representa el saber campesino compartido." />
          </div>
        </div>

        {/* HORTICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Horticultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/horticultura/cebolla.jpg" alt="Cebolla" title="Cebolla" description="Base de la cocina boliviana, cultivada con dedicación. Su sabor y propiedades antibacterianas la convierten en ingrediente indispensable en cada receta." />
            <Card src="/image/horticultura/acelga.jpg" alt="Acelga" title="Acelga" description="Verdura de hojas verdes, rica en hierro, calcio y fibra. Se cultiva todo el año y promueve la salud digestiva y cardiovascular de nuestros adultos mayores." />
            <Card src="/image/horticultura/perejil.jpg" alt="Perejil" title="Perejil" description="Hierba aromática esencial en la gastronomía local, con propiedades antioxidantes. Su cultivo es sencillo y aporta frescura a diversas preparaciones." />
            <Card src="/image/horticultura/oregano.jpg" alt="Orégano" title="Orégano" description="De aroma intenso y sabor característico, es usado en salsas, carnes y también como planta medicinal por sus propiedades digestivas y calmantes." />
            <Card src="/image/horticultura/cilantro.jpg" alt="Cilantro" title="Cilantro" description="Hierba vibrante de sabor fuerte, muy utilizada en platos tradicionales. Sus hojas y semillas ofrecen beneficios digestivos y son cultivadas con esmero." />
            <Card src="/image/horticultura/espinaca.jpg" alt="Espinaca" title="Espinaca" description="Fuente natural de hierro y antioxidantes, ideal para fortalecer la salud ósea y muscular. Crece fácilmente en climas templados y se cosecha con cuidado." />
            <Card src="/image/horticultura/calabaza.jpg" alt="Calabaza" title="Calabaza" description="Fruto versátil y nutritivo, utilizado en sopas, panes y postres. Su cultivo promueve el trabajo en equipo y la alimentación rica en vitaminas." />
            <Card src="/image/horticultura/zanahoria.jpg" alt="Zanahoria" title="Zanahoria" description="Hortaliza de raíz con alto contenido en betacarotenos. Cultivada en nuestro huerto, fortalece la visión y añade color a los platos diarios." />
            <Card src="/image/horticultura/repollo.jpg" alt="Repollo" title="Repollo" description="De textura firme y sabor suave, esta verdura se usa en ensaladas, fermentos y guisos. Su cultivo requiere paciencia y dedicación." />
            <Card src="/image/horticultura/pepino.jpg" alt="Pepino" title="Pepino" description="Refrescante y liviano, ideal para ensaladas y jugos. Hidratante y bajo en calorías, es cultivado con cuidado por manos que conocen la tierra." />
          </div>
        </div>

        {/* FLORICULTURA */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Floricultura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/floricultura/rosas.jpg" alt="Rosas" title="Rosas" description="Símbolo de amor y belleza. Cultivadas en el jardín del centro, sus colores y fragancias embellecen el entorno y despiertan emociones profundas." />
            <Card src="/image/floricultura/jazmin.jpg" alt="Jazmín" title="Jazmín" description="Flor blanca de perfume suave, cultivada por su efecto relajante y decorativo. Aporta paz y equilibrio al espacio de los adultos mayores." />
            <Card src="/image/floricultura/santarita.jpg" alt="Santarita" title="Santarita" description="Planta trepadora de colores vibrantes, ideal para cercos y pérgolas. Representa la vitalidad y la alegría que florece en el huerto." />
            <Card src="/image/floricultura/pedrosegundo.jpg" alt="Pedro Segundo" title="Pedro Segundo" description="Flor tradicional de Bolivia, cultivada en homenaje a la cultura local. Su presencia en el huerto celebra las raíces y la identidad del lugar." />
          </div>
        </div>

        {/* PLANTAS MEDICINALES */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Plantas Medicinales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/medicinales/sabila.jpg" alt="Sábila" title="Sábila" description="Planta suculenta de uso externo e interno, utilizada para tratar heridas, quemaduras y afecciones de la piel. También ayuda a la digestión." />
            <Card src="/image/medicinales/pinon.jpg" alt="Piñón" title="Piñón" description="Cultivado por sus beneficios musculares. Su aceite es usado en masajes para aliviar dolores articulares y relajar el cuerpo naturalmente." />
            <Card src="/image/medicinales/cedron.jpg" alt="Cedrón" title="Cedrón" description="Hierba de hojas aromáticas que se infusiona para calmar los nervios y favorecer el sueño reparador. Muy apreciada por los adultos mayores." />
            <Card src="/image/medicinales/matico.jpg" alt="Matico" title="Matico" description="Planta tradicional con propiedades curativas. Se usa en infusión o cataplasma para tratar heridas, dolores y problemas digestivos." />
            <Card src="/image/medicinales/guayaba.jpg" alt="Guayaba" title="Guayaba" description="Además de su fruto, sus hojas tienen poder medicinal. Se utilizan en té para aliviar malestares estomacales, diarrea y fiebre." />
            <Card src="/image/medicinales/paico.jpg" alt="Paico" title="Paico" description="Conocido por sus propiedades antiparasitarias. Muy usado por generaciones en remedios caseros para aliviar dolores abdominales." />
            <Card src="/image/medicinales/anamo.jpg" alt="Anamo" title="Anamo" description="Hierba silvestre de efecto revitalizante. Se cultiva con respeto a la tradición y se utiliza para energizar cuerpo y mente." />
            <Card src="/image/medicinales/colonia.jpg" alt="Colonia" title="Colonia" description="Planta aromática que relaja los sentidos. Muy cultivada en los patios del centro, donde su perfume genera bienestar emocional." />
            <Card src="/image/medicinales/moringa.jpg" alt="Moringa" title="Moringa" description="Considerada un superalimento, esta planta contiene proteínas, vitaminas y antioxidantes. Su consumo fortalece la salud y el sistema inmunológico." />
          </div>
        </div>

        {/* ABONOS ORGÁNICOS */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Producción de Abonos Orgánicos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card src="/image/abono/composta.jpg" alt="Composta" title="Composta Vegetal" description="Mezcla natural de restos vegetales como hojas, cáscaras y raíces. Se descompone y se convierte en un abono que mejora la textura y nutrientes del suelo." />
            <Card src="/image/abono/humus.jpg" alt="Humus de lombriz" title="Humus de lombriz" description="Abono orgánico de gran calidad, elaborado por lombrices rojas californianas. Enriquece la tierra con microorganismos beneficiosos y estimula el crecimiento saludable de las plantas." />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
