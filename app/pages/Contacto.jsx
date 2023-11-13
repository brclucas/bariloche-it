'use client'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import CountrySelect from './CountrySelect';

const Contacto = () => {
  const formulario = useRef();
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const { user_name, user_email, message, phone, prefix } = formulario.current;

    // Validación de campos obligatorios
    const newErrors = {};
    if (user_name.value.trim() === '') {
      newErrors.user_name = 'El campo Nombre es obligatorio';
    }
    if (user_email.value.trim() === '') {
      newErrors.user_email = 'El campo Email es obligatorio';
    }
    if (message.value.trim() === '') {
      newErrors.message = 'El campo Mensaje es obligatorio';
    }
    if (phone.value.trim() === '') {
      newErrors.phone = 'El campo Teléfono es obligatorio';
    }

    // Si hay errores, actualiza el estado y no envíes el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSending(false); // Detener la animación del botón "Send"
      return;
    }

    try {
      // Configura tu servicio y plantilla de EmailJS
      await emailjs.sendForm('service_zcqckab', 'template_xn5d0qm', formulario.current, 'wih491HK3bFif_3oU');

      Swal.fire(
        '¡Gracias!',
        'Te responderé en cuanto vea el mensaje!',
        'success'
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false); // Detener la animación del botón "Send"
    }
  };

  return (
      <main id="contacto" className='flex flex-col items-center h-screen w-full xl:gap-2 bg-black'>
        <h1 className='text-5xl text-red italic mt-5 select-none'>¡Contactame!</h1>
        <div className='bg-white w-[60%] h-[2px] select-none '></div>
        <article className='select-none flex flex-col justify-center items-center mt-10 relative'>
          <form autoComplete="off" ref={formulario} onSubmit={sendEmail} className='p-6 xs:b-10 md:b-10 lg:b-12 xl:b-16 rounded-md bg-wait max-w-screen-md w-full'>
            <div className="">
              <img 
                hidden={true} 
                id="bandera-imagen" 
                src="" 
                alt="Bandera" 
                className="absolute top-0 right-0 m-5 w-20 h-14" 
              />
             </div>
              <section className='text-white flex flex-col gap-3 text-red mt-8'>
              <label>Nombre</label>
              <input
                className='text-black input-style rounded-md'
                type="text"
                name="user_name"
              />
              {errors.user_name && <span className="text-red-500">{errors.user_name}</span>}
              <label>Email</label>
              <input
                className='text-black input-style rounded-md'
                type="email"
                name="user_email"
              />
              {errors.user_email && <span className="text-red-500">{errors.user_email}</span>}
              <label>Teléfono</label>
              <div className="text-black flex items-center justify-center rounded-md">
                <div className="input-style">
                  <CountrySelect
                    className="text-black mb-2"
                    onChange={handleCountryChange}
                    selectedCountry={selectedCountry}
                  />
                  <input
                    className="w-full rounded-md p-2 text-black mt-5"
                    type="tel"
                    name="phone"
                    placeholder={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`}
                  />
                </div>
              </div>
    
              <input
                hidden={true}
                name="prefix"
                defaultValue={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`}
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
              <label>Mensaje</label>
              <textarea
                className=' text-black input-style rounded-md'
                name="message"
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
              <input
                className={`rounded-md w-auto button-style ${isSending ? 'animate-pulse bg-yellow' : 'bg-nav'}`}
                type="submit"
                value="Send"
              />
            </section>
          </form>
        </article>
      </main>
    );
};

export default Contacto;
