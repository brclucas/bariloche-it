'use client'

import MobileSliders from './Components/MobileSliders';
import React from 'react';

const Telefonos = () => {
  const [sliderIndex, setSliderIndex] = React.useState(0);

  return (
    <div>
      <MobileSliders sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
    </div>
  );
};

export default Telefonos;