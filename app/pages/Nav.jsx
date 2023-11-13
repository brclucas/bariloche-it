'use client'
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Nosotros" },
    { href: "#", label: "Servicios" },
    { href: "#", label: "Contacto" },
  ];

  const mobileAuthLinks = [
    { href: "#", label: "Registro" },
    { href: "#", label: "Ingresar" },
  ];

  return (
    <>
      <header className="bg-nav fixed sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <img href="/" className="text-3xl font-bold" src='../../public/logobit.ico' alt="<BIT/>" />
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Opción "Sign in / Login" en la versión móvil */}
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            {mobileAuthLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="items-center justify-center transition-transform duration-75 hover:shadow-md bg-wait rounded-lg gap-3 text-red fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full">
              {/* Enlaces del menú principal en versión móvil */}
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Enlaces de autenticación en versión móvil */}
              {mobileAuthLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
