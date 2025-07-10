"use client";
import Image from "next/image";
import { SafeButton } from "./SafeMaterial";

export function FixedPlugin() {
  return (
    <a
      href="https://wa.me/59170882168" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <SafeButton
        color="green"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-2 pl-2 items-center border border-green-500 shadow-md"
        type="button"
      >
        <Image
          width={24}
          height={24}
          className="w-10 h-10"
          alt="WhatsApp"
          src="/image/logowhats.jpg" 
        />
        Escríbenos por WhatsApp
      </SafeButton>
    </a>
  );
}
