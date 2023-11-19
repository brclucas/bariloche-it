import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from 'react-type-animation';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import Contacto from '../Contacto';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }
    return (
        <Slider {...settings}>  
        
          <div className="card-wrapper">
            <div className=""data-aos="fade-right">
            <h3 className=' flex justify-center xs:text-4xl md:text-3xl text-white mb-5'>¡Bienvenido! 👨🏻‍💻</h3>
            <h2 className='  flex justify-center xs:text-4xl md:text-3xl text-white mb-5'>
              Somos </h2>
              <h2 className=' flex justify-center xs:text-4xl md:text-4xl mb-5 text-lightblue'>
              Bariloche IT </h2>

          <h2 className=' flex justify-center mt-4 md:text-3xl text-white flex-row gap-3'>
            <span className='flex justify-center text-lightblue'></span>{"Nos especializamos en: "}
          </h2>
          <h2 className='flex justify-center mt-4 md:text-3xl text-white flex-row gap-3'>
            <span className='text-lightblue '>
              <TypeAnimation
                sequence={[
                  '🔧 Telecomunicaciones... ',
                  3000,
                  '🌐 Networking...',
                  3000,
                  '🤝 Asesoría Estratégica...',
                  3000,
                  '🔒 Ciberseguridad...',
                  3000,
                  'Y Mucho mas!...',
                  3000,
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>
        </div>



            </div>
            <div className="card-wrapper">
                <Contacto/>           {/* Este sorete me esta dando un scroll en el principal */}

            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./logo.png" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Embrace<span className="job-title">Your Darkness</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="./logo.png" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>ML <span className="job-title">Fashion</span></h2>
                    </div>
                </div>
            </div>
            <article className=' fixed bottom-0 right-3 mr-3 text-white'>
          <div className="flex flex-row items-end">
            <a href="https://api.whatsapp.com/send?phone=5492944161701" rel="noreferrer" target="_blank" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-green-500'>
              <SiWhatsapp/>
            </a>
            <a href="https://github.com/brclucas" target="_blank" rel="noreferrer" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-violet-600'>
              <SiGithub/>
            </a>
            <a href="https://www.linkedin.com/company/brc-it" rel="noreferrer" target="_blank" className='animate-bounce mb-2 text-3xl hover:scale-110 hover:text-sky-600'>
              <SiLinkedin/>
            </a>
          </div>
        </article>
        </Slider>
    )
}

export default ImageSlider