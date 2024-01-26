// ButtonComponent.js

import React, { useState } from 'react';

const ButtonLoad = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      // Lógica asíncrona aquí (puedes usar un temporizador como ejemplo)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Una vez que la carga asíncrona está lista, redirige al usuario
      window.location.href = 'http://barilocheit.com.ar:880';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-gray-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ${isLoading ? 'animate-pulse' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? 'Cargando...' : 'Iniciar Sesion'}
    </button>
  );
};

export default ButtonLoad;
