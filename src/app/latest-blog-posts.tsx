"use client";

import React from "react";
import {
  SafeTypography,
} from "@/components/SafeMaterial";
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/imagen9.jpg",
    title: "Qué Hacemos",
    desc: `Promovemos el bienestar integral de nuestros adultos mayores mediante espacios seguros, atención dedicada y actividades significativas. Cada día es una nueva oportunidad para compartir experiencias con alegría, respeto y humanidad profunda.`,
  },
  {
    img: "/image/imagen12.jpg",
    title: "Qué Necesitamos",
    desc: `Necesitamos manos comprometidas, recursos sostenibles y apoyo solidario que fortalezcan nuestros programas. Tu colaboración permite crear entornos activos que enriquecen la vida de nuestros adultos mayores con propósito y amor.`,
  },
  {
    img: "/image/imagen14.jpg",
    title: "Cómo Puedes Ayudar",
    desc: `Puedes apoyar siendo voluntario, realizando donaciones o difundiendo nuestra labor. Cada gesto transforma el presente, mejora el entorno y enriquece la vida de nuestros adultos mayores con dignidad y esperanza.`,
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12 text-center">
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((props, idx) => (
          <BlogPostCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default LatestBlogPosts;
