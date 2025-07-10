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
    if (searchParams.get("scroll") === "inicio") {
      const target = document.querySelector("#inicio");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

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
