'use client'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import CountrySelect from './Components/CountrySelect';

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm('service_zcqckab', 'template_xn5d0qm', formulario.current, 'wih491HK3bFif_3oU');

      Swal.fire(
        '¡Gracias!',
        'Te responderé en cuanto vea el mensaje!',
        'success'
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contacto" className="bg-nav flex items-center justify-center">
      <main className="bg-wait p-6 xs:b-10 md:b-10 lg:b-12 xl:b-16 rounded-md w-full max-w-md text-center">
        <h1 className="text-5xl text-red italic mb-4 items-center justify-center text-center">¡Contactame!</h1>
        <div className="bg-white h-2 mb-6"></div>
        <form ref={formulario} onSubmit={sendEmail} className="text-white">
          <label className="block mb-2">Nombre</label>
          <input className="w-[80%] rounded-md mb-4" type="text" name="user_name" placeholder="Nombre Completo"/>
          {errors.user_name && <span className="text-red-500">{errors.user_name}</span>}

          <label className="block mb-2">Email</label>
          <input className="w-[80%] rounded-md mb-4" type="email" name="user_email" placeholder="Correo@ejemplo.com" />
          {errors.user_email && <span className="text-red-500">{errors.user_email}</span>}

          <label className="block mb-2">Teléfono</label>
          <div className="w-[80%] mx-auto flex flex-col mb-4 text-center">
            <CountrySelect className="text-black mr-2 w-[80%]" onChange={handleCountryChange} selectedCountry={selectedCountry} />
            <input
              className="w-[100%] rounded-md p-2 text-black"
              type="tel"
              name="phone"
              placeholder={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`}
            />
          </div>
          <input hidden={true} name="prefix" defaultValue={`Teléfono ${selectedCountry ? selectedCountry.prefix : ''}`} />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}

          <label className="block mb-2">Mensaje</label>
          <textarea className=" w-[80%] rounded-md mb-4" name="message" placeholder="Envianos tu consulta y te contestaremos en breve..."/>

          {errors.message && <span className="text-red-500">{errors.message}</span>}

          <input
            className={`rounded-md w-full ${isSending ? 'animate-pulse bg-yellow' : 'bg-nav'}`}
            type="submit"
            value="Enviar"
          />
        </form>
      </main>
    </div>
  );
};

export default Contacto;
