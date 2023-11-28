'use client'
import React, { useState } from "react";
import { Link } from 'react-scroll';
import ButtonLoad from "../Components/ButtonLoad";

const Nav = () => {
  return (
  <nav className="bg-white text-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-black dark:border-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://barilocheit.com.ar" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./logo.png" className="h-8" alt=""/>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <ButtonLoad/>
    </div>
    <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link to="inicio" smooth={true} duration={1000} offset={-50}>
          <button className='bg-white  text-black hover:scale-110 hover:text-blue-600' >Inicio</button>
        </Link>
        </li>
        <li>
        <Link to="nosotros" smooth={true} duration={1000} offset={-50}>
          <button className='bg-white  text-black hover:scale-110 hover:text-blue-600' >Nosotros</button>
        </Link>
        </li>
        <li>
        <Link to="servicios" smooth={true} duration={1000} offset={-50}>
          <button className='bg-white  text-black hover:scale-110 hover:text-blue-600' >Servicios</button>
        </Link>
        </li>
        <li>
        <Link to="contacto" smooth={true} duration={1000} offset={-50}>
          <button className='bg-white  text-black hover:scale-110 hover:text-blue-600' >Contacto</button>
        </Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
    );
};

export default Nav;
