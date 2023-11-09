'use client'
import React, { useEffect } from 'react';
import LightsSvg from '../../public/LightsSvg.jsx';
import { TypeAnimation } from 'react-type-animation';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Principal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className='bg-black flex flex-col md:flex-row lg:flex-row xl:flex-row h-screen'>
      <div className='fixed animate-pulse pointer-events-none'>
        <LightsSvg />
      </div>
      <div className='mx-5 md:mx-10 lg:mx-10 xl:mx-10 mt-5 md:mt-10 lg:mt-10 xl:mt-10'>
        <div data-aos="fade-right">
          <div className='mt-0'>
            <h3 className='mt-5 mb-10 md:text-2xl lg:text-4xl xl:text-5xl text-white opacity-70'>¡Bienvenido! 👨🏻‍💻</h3>
            <h2 className='md:text-4xl lg:text-6xl xl:text-7xl text-white xl:whitespace-nowrap'>
              Somos <span className='text-lightblue md:text-5xl lg:text-7xl xl:text-8xl mt-5'>Bariloche IT</span>
            </h2>
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

        <article className='fixed bottom-0 right-3 md:bottom-3 lg:bottom-3 xl:bottom-3 p-10 m-auto text-white'>
          <div className="flex flex-col items-end">
            <a href="https://api.whatsapp.com/send?phone=5492944161701" rel="noreferrer" target="_blank" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-green-500'>
              <SiWhatsapp/>
            </a>
            <a href="https://github.com/brclucas" target="_blank" rel="noreferrer" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-violet-600'>
              <SiGithub/>
            </a>
            <a href="https://www.linkedin.com/in/brclucas/" rel="noreferrer" target="_blank" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-sky-600'>
              <SiLinkedin/>
            </a>
          </div>
        </article>

        <Link to="contact" smooth={true} duration={1000} offset={-50}>
          <button className='flex flex-row fixed bottom-0 left-3 p-5 text-secondary text-4xl animate-bounce'>
            <AiOutlineArrowDown />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Principal;