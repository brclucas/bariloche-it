import React from 'react';
import Principal from './pages/Principal.jsx';
import Contacto from './pages/Contacto'; 
import Nav from './pages/Nav'; 
import ButtonMobile from './pages/ButtomMobile';
import 'flowbite';


const page = () => {
  return (
    <div>
      <Nav/>
      <Principal/>
      <div className='hidden md:block'>
      <Contacto/>
      </div>
      <ButtonMobile/>
    </div>
  );
};

export default page;