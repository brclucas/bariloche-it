import React from 'react';
import Principal from './pages/Principal'; // Asegúrate de que la ruta sea correcta
import Contacto from './pages/Contacto'; // Asegúrate de que la ruta sea correcta

const page = () => {
  return (
    <div>
      <Principal />
      <Contacto />
    </div>
  );
};

export default page;