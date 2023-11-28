'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contacto = () => {
  const formulario = useRef();
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!formulario.current) {
      setIsSending(false);
      return;
    }
    const { user_name, user_email, phone, message } = formulario.current;

    const newErrors = {};
    if (!user_name.value.trim()) {
      newErrors.user_name = '*Este campo es obligatorio';
    }
    if (!user_email.value.trim()) {
      newErrors.user_email = '*Este campo es obligatorio';
    }
    if (!phone.value.trim()) {
      newErrors.phone = '*Este campo es obligatorio';
    }
    if (!message.value.trim()) {
      newErrors.message = '*Este campo es obligatorio';
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
    <div id="contacto" className=" flex items-center justify-center">
      <section className="rounded-lg bg-white dark:bg-gray-900 md:mb-20">
        <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-lg w-full">
          <h2 className="mb-6 text-3xl xs:text-xl sm:text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactanos</h2>
          <form action="#" className="mb-2 space-y-4 " ref={formulario}>
            <div>
              <label  className="block mb-0 text-xs sm:text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300">Nombre Completo*</label>
              <input type="text" name="user_name" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${errors.user_name ? 'border-red-500' : ''}`} placeholder="Juan Cruz Perez" required />
            </div>
            <div>
              <label  className="block mb-0 text-xs sm:text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300">Email*</label>
              <input type="text" name="user_email" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${errors.user_email ? 'border-red-500' : ''}`} placeholder="nombre@correo.com" required />
            </div>
            <div>
              <label  className="block mb-0 text-xs sm:text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300">Motivo de Contacto*</label>
              <input type="text" name="phone" className={`block p-3 text-xs sm:text-sm md:text-lg w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${errors.phone ? 'border-red-500' : ''}`} placeholder="¿En que podemos ayudar?" required />
            </div>
            <div className="sm:col-span-2">
              <label  className="block mb-0 text-xs sm:text-sm md:text-lg font-medium text-gray-900 dark:text-gray-400">Su Mensaje*</label>
              <textarea name="message" rows="2" className={`block p-2.5 w-full h-auto text-xs sm:text-sm md:text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.message ? 'border-red-500' : ''}`} placeholder="..."></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className={`py-3 px-5 text-xs sm:text-sm md:text-lg font-medium flex items-center justify-center text-black rounded-lg ${isSending ? 'animate-pulse bg-yellow' : 'bg-nav'} hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
