'use client'

import React, { useRef,useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TypeAnimation } from 'react-type-animation';
import Contacto from '../Contacto';
import Aos from "aos";
import "aos/dist/aos.css";
import Principal from '../Principal';

const ButtonMobile = ({ sliderIndex, setSliderIndex }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  const sliderRef = useRef(null);

  const handleSectionClick = (index) => {
    setSliderIndex(index);
    // Al hacer click en alguna sección, hace el scroll lateral al índice deseado
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>

<div className="card-wrapper">      
      <Principal/>
  </div>
  <div className="card-wrapper mt-10%">
      <Contacto/>           
  </div>
</Slider>

      {/* Botones de navegación */}
      <div id="buttomMobile">
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <Link
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group ${
                sliderIndex === 0 ? 'active' : ''
              }`}
              onClick={() => handleSectionClick(0)}
            >
              <BsHouseDoor className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Inicio</span>
            </Link>
            <Link
              to="nosotros"
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group ${
                sliderIndex === 1 ? 'active' : ''
              }`}
              onClick={() => handleSectionClick(1)}
            >
              <BiInfoCircle className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Nosotros</span>
            </Link>
            <Link
              to="servicios"
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group ${
                sliderIndex === 2 ? 'active' : ''
              }`}
              onClick={() => handleSectionClick(2)}
            >
              <MdOutlineDesignServices className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Servicios</span>
            </Link>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer inline-flex flex-col items-center justify-center px-5 hover:bg-blue-600 dark:hover:bg-gray-800 group ${
                sliderIndex === 3 ? 'active' : ''
              }`}
              onClick={() => handleSectionClick(3)}
            >
              <AiOutlineMail className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white">Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonMobile;
