"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Navbar as MTNavbar, Collapse } from "@material-tailwind/react";
import { SafeButton, SafeTypography, SafeIconButton } from "@/components/SafeMaterial";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href = "#", onClick }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
            if (onClick) onClick();
          } else if (onClick) {
            onClick();
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <SafeTypography
          as="span"
          variant="small"
          className="font-medium cursor-pointer"
        >
          {children}
        </SafeTypography>
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClickConocenos() {
    if (pathname === "/") {
      // Ya en home: solo scroll
      const target = document.querySelector("#inicio");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      // No en home: navega con query para hacer scroll luego
      router.push("/?scroll=inicio");
    }
    setOpen(false);
  }

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <SafeTypography
          variant="h6"
          color={isScrolling ? "blue-gray" : "white"}
        >
          Centro De Ancianos Vida Feliz - El Torno
        </SafeTypography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleClickConocenos();
              }}
              href="/"
              style={{ cursor: "pointer" }}
            >
              <SafeTypography
                as="span"
                variant="small"
                className="font-medium cursor-pointer"
              >
                Conocenos
              </SafeTypography>
            </a>
          </li>
          <NavItem href="/nuestra-esencia" onClick={() => setOpen(false)}>Nuestra Esencia</NavItem>
          <NavItem href="/artesanias" onClick={() => setOpen(false)}>Museo</NavItem>
          <NavItem href="/huertos" onClick={() => setOpen(false)}>Huertos</NavItem>
        </ul>
        <div className="hidden items-center lg:flex gap-2">
          <SafeButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
          >
            Voluntariados
          </SafeButton>
          <a href="http://facebook.com/centro.vidafeliz" target="_blank" rel="noreferrer">
            <SafeButton
              color={isScrolling ? "gray" : "white"}
            >
              Facebook
            </SafeButton>
          </a>
        </div>
        <SafeIconButton
          variant="text"
          color="white"
          onClick={() => setOpen(!open)}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </SafeIconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleClickConocenos();
                }}
                href="/"
                style={{ cursor: "pointer" }}
              >
                <SafeTypography
                  as="span"
                  variant="small"
                  className="font-medium cursor-pointer"
                >
                  Conocenos
                </SafeTypography>
              </a>
            </li>
            <NavItem href="/nuestra-esencia" onClick={() => setOpen(false)}>Nuestra Esencia</NavItem>
            <NavItem href="/artesanias" onClick={() => setOpen(false)}>Artesanias</NavItem>
            <NavItem href="/huertos" onClick={() => setOpen(false)}>Huertos</NavItem>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <SafeButton variant="text" color="gray">
              Log in
            </SafeButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank" rel="noreferrer">
              <SafeButton color="gray">Blocks</SafeButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
