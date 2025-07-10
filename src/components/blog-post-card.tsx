import React from "react";
import Image from "next/image";

import { SafeButton, SafeTypography,SafeCardBody,SafeCard,SafeCardHeader } from "@/components/SafeMaterial";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface BlogPostCardProps {
  img: string;
  title: string;
  desc: string;
}

export function BlogPostCard({ img, title, desc }: BlogPostCardProps) {
  return (
    <SafeCard color="transparent" shadow={false}>
      <SafeCardHeader floated={false} className="mx-0 mt-0 mb-6 h-52">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </SafeCardHeader>
      <SafeCardBody className="p-0">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <SafeTypography variant="h5" className="mb-2">
            {title}
          </SafeTypography>
        </a>
        <SafeTypography className="mb-3 font-normal !text-gray-500 whitespace-pre-line">
          {desc}
        </SafeTypography>
      </SafeCardBody>
    </SafeCard>
  );
}

export default BlogPostCard;