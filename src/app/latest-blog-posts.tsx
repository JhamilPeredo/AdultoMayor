"use client";

import React from "react";
import {
  SafeTypography,
} from "@/components/SafeMaterial";
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Qué Hacemos",
    desc: `hola`,
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Qué Necesitamos",
    desc: `hola`,
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Cómo Puedes Ayudar",
    desc: `hola`,
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
