'use client'
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import LightsSvg from '../../public/LightsSvg';
import ImageSlider from './Components/Carrusel';

const Principal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

    <section id="inicio" className='bg-nav flex flex-col md:flex-row lg:flex-row xl:flex-row h-screen max-h-max[80vh]'>
          {/* Este div solo se muestra en dispositivos móviles */}
          <div className='h-screen hidden max-cel:block'>       
            <ImageSlider />
          </div>
      {/* Este div solo se muestra en dispositivos XL */}
      <div className='hidden md:block xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-5 xl:mt-25 lg:mt-25 md:mt-25 sm:mt-25 xs:mt-25'>
      <div className='animate-pulse pointer-events-none '>
        <LightsSvg />
      </div >
        <div data-aos="fade-right">
          <div className='mt-0'>
            <h3 className=' select-none xs:text-4xl md:text-3xl lg:text-5xl xl:text-6xl text-white mb-5'>¡Bienvenido! 👨🏻‍💻</h3>
            <h2 className=' select-none xs:text-4xl md:text-3xl lg:text-5xl xl:text-6xl text-white mb-5'>
              Somos </h2>
              <h2 className='select-none xs:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-glaciar mb-5'>
              Bariloche IT </h2>
          </div>

          <h2 className='select-none mt-4 md:text-3xl lg:text-3xl xl:text-3xl text-xl text-white flex-row gap-3'>
            <span className='select-none text-lightblue'></span>{"Nos especializamos en: "}
          </h2>
          <h2 className='mt-4 md:text-3xl lg:text-3xl xl:text-3xl text-xl text-white flex-row gap-3'>
            <span className='text-lightblue select-none'>
              <TypeAnimation
                sequence={[
                  '📡 Telecomunicaciones... ',
                  3000,
                  '🌐 Networking...',
                  3000,
                  '🚀 DevOps y SRE...',
                  3000,
                  '🔒 Ciberseguridad...',
                  3000,
                  '🤝 Asesoría Estratégica...',
                  3000, 
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>
        </div>

        <article className=' fixed bottom-8 right-3 mr-3 text-white'>
          <div className="flex flex-col items-end">
            <a href="https://api.whatsapp.com/send?phone=5492944161701" rel="noreferrer" target="_blank" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-green-500'>
              <SiWhatsapp/>
            </a>
            <a href="https://github.com/brclucas" target="_blank" rel="noreferrer" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-violet-600'>
              <SiGithub/>
            </a>
            <a href="https://www.linkedin.com/company/brc-it" rel="noreferrer" target="_blank" className='animate-bounce mb-10 text-3xl hover:scale-110 hover:text-sky-600'>
              <SiLinkedin/>
            </a>
          </div>
        </article>

        <Link to="contacto" smooth={true} duration={1000} offset={-50}>
          <button className='hidden md:block fixed bottom-20 left-3 ml-3 text-white animate-bounce text-3xl' >
            <AiOutlineArrowDown />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Principal;
