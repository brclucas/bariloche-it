import React from 'react';
import Principal from './pages/PrincipalPc';
import Contacto from './pages/Contacto'; 
import Nav from './pages/Nav'; 
import ButtonMobile from './pages/ButtomMobile';
import 'flowbite';


const page = () => {
  return (
    <div>
      <Nav/>
      <Principal/>
      <Contacto/>
      <ButtonMobile/>
    </div>
  );
};

export default page;