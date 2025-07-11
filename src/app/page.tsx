"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar, Footer ,FixedPlugin} from "@/components";

import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import ContactForm from "./contact-form";

export default function HomePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
  const scrollFlag = sessionStorage.getItem("scrollToInicio");
  if (scrollFlag === "true") {
    sessionStorage.removeItem("scrollToInicio");
    const target = document.querySelector("#inicio");
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <LatestBlogPosts />
      <ContactForm />
       <FixedPlugin />
      <Footer />
    </>
  );
}
