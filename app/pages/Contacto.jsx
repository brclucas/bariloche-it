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
    <main id="contact" className='flex flex-col items-center h-auto w-full xl:gap-2 bg-black'>
      <h1 className='text-5xl text-red italic xl:mt-[5%] md:mt-[5%] xs:mt-[5%]'>¡Contactame!</h1>
      <div className='bg-white w-[60%] h-[2px]'></div>
      <article className='flex gap-11 xl:flex-row lg:flex-col md:flex-col xs:flex-col justify-center items-center m-auto'>
        <form ref={formulario} onSubmit={sendEmail} className='rounded-md bg-form place-content-between'>
          <section className='flex flex-col transition-transform lg:mt-[5%] md:mt-[20%] xs:mt-[30%] duration-75 hover:shadow-md hover:shadow-NameColor bg-nav xl:p-10 xl:px-20 lg:p-20 lg:px-36 md:p-14 md:px-20 xs:p-11 xs:px-16 rounded-lg gap-3 text-red'>
            <div className="relative">
              <img hidden={true} 
              id="bandera-imagen" 
              src="" 
              alt="Bandera" 
              className="absolute top-0 right-0 w-25 h-16" />
            </div>
            <label>Nombre</label>
            <input
              className='text-red rounded-md transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0'
              type="text"
              name="user_name"
            />
            {errors.user_name && <span className="text-red-500">{errors.user_name}</span>}
            <label>Email</label>
            <input
              className='rounded-md text-red transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0'
              type="email"
              name="user_email"
            />
            {errors.user_email && <span className="text-red-500">{errors.user_email}</span>}
            <label>Teléfono</label>
            <div className="flex" id="contacto-tel">
              <CountrySelect onChange={handleCountryChange} selectedCountry={selectedCountry} />
              <input
                className="flex-1 rounded-md text-red transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0"
                type="tel"
                name="phone"
                placeholder={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`}
              />
            </div>
            <input
              hidden={true}
              name="prefix"
              defaultValue={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`}
            />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            <label>Mensaje</label>
            <textarea
              className='rounded-md text-red transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0'
              name="message"
            />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
            <input
              className={`transition p-1 rounded-full duration-300 ease-in-out cursor-pointer hover:scale-105 ${isSending ? 'animate-pulse bg-wait' : 'bg-form'}`}
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
