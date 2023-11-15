'use client'
import { Link } from 'react-scroll';
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from 'react-icons/bi';
import { MdOutlineDesignServices } from "react-icons/md";
import { BsHouseDoor, BsWallet, BsGear, BsPerson } from 'react-icons/bs';

const ButtonMobile = () => {
  return (
    <div id="buttomMobile" className='hidden max-cel:block'>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group"
          >
            <BsHouseDoor className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Inicio</span>
          </Link>
          <Link
            to="nosotros"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group"
          >
            <BiInfoCircle className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Nosotros</span>
          </Link>
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group"
          >
            <MdOutlineDesignServices className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Servicios</span>
          </Link>
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group"
          >
            <AiOutlineMail className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Contacto</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ButtonMobile;
