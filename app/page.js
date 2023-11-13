import React from 'react';
import Principal from './pages/Principal';
import Contacto from './pages/Contacto'; 
import Nav from './pages/Nav'; 


const page = () => {
  return (
    <div>
      <Nav />
      <Principal />
      <Contacto />
    </div>
  );
};

export default page;