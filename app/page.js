import React from 'react';
import Principal from './pages/Principal.jsx';
import Contacto from './pages/Contacto'; 
import TopNavBar from './pages/Components/TopNavBar.jsx'; 
import Telefonos from './pages/Telefonos';
import LightsSvg from '../public/LightsSvg';
import 'flowbite';


const page = () => {
  return (
    <div>
      <div className='animate-pulse pointer-events-none '>
        <LightsSvg />
      </div >
      <TopNavBar/>
      <div className='hidden cel:block'>
      <Principal/>
      <Contacto/>
      </div>
      <div className="sm:block md:hidden">
      <Telefonos/>
      </div>
    </div>
  );
};

export default page;

