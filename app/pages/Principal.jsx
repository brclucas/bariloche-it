'use client'
import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import LightsSvg from '../../public/LightsSvg';


const Principal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

    <section id="home" className='bg-nav flex flex-col md:flex-row lg:flex-row xl:flex-row h-screen'>
      <div className='xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-5 xl:mt-20 lg:mt-20 md:mt-20 sm:mt-20 xs:mt-20'>
      <div className='animate-pulse pointer-events-none'>
        <LightsSvg />
      </div >
        <div data-aos="fade-right">
          <div className='mt-0'>
            <h3 className='xs:text-3xl md:text-2xl lg:text-4xl xl:text-5xl text-lightblue opacity-70 mb-5'>¡Bienvenido! 👨🏻‍💻</h3>
            <h2 className='xs:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-white mb-5'>
              Somos </h2>
          </div>
          <h2 className='mt-4 md:text-3xl lg:text-3xl xl:text-3xl text-xl text-white flex-row gap-3'>
            <span className='select-none text-lightblue'></span>{"Nos especializamos en: "}
          </h2>
          <h2 className='mt-4 md:text-3xl lg:text-3xl xl:text-3xl text-xl text-white flex-row gap-3'>
            <span className='text-lightblue italic'>
              <TypeAnimation
                sequence={[
                  'Networking y Ciberseguridad... ',
                  3000,
                  'Asesoría y Soporte Técnico en IT...',
                  3000,
                  'Infraestructura On-Premise y Cloud...',
                  3000,
                  'Desarrollo Full Stack...',
                  3000,
                  'Y Mucho...',
                  3000,
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>
        </div>

        <article className='fixed bottom-5 right-3 mr-3 text-white'>
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

        <Link to="contact" smooth={true} duration={1000} offset={-50}>
          <button className='fixed bottom-15 left-3 ml-3 text-white animate-bounce text-3xl' >
            <AiOutlineArrowDown />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Principal;
