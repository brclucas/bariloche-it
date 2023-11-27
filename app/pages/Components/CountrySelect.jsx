'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement("#contacto"); // Reemplaza "#root" con el selector del elemento principal de tu aplicación

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    maxHeight: '80vh',
    backgroundColor: 'rgba(166, 166, 159, 1)',
  },
};

const CountrySelect = ({ onChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/subregion/america');
        const mappedCountries = response.data.map((country) => ({
          prefix: `(${country.idd.root}${country.idd.suffixes})`,
          bandera: `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`,
          label: `${country.name.common}`,
        }));
        setCountries(mappedCountries);
      } catch (error) {
        console.error('Error al obtener la lista de países', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (selectedOption) => {
    setSelectedCountry(selectedOption);
    onChange(selectedOption);
    setIsModalOpen(false);

        // Inserta la imagen seleccionada en el formulario
        const banderaImagen = document.getElementById('bandera-imagen');
        if (banderaImagen) {
          banderaImagen.src = selectedOption ? selectedOption.bandera : '';
          banderaImagen.hidden = false
        }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="text-black">
      <div
        onClick={openModal}
        className="flex gap-11 xl:flex-row lg:flex-col md:flex-col xs:flex-col justify-center items-center m-auto bg-white relative rounded-md text-black transition-all duration-300 ease-in-out border-2 cursor-pointer"
      >
        {selectedCountry ? selectedCountry.label : 'Seleccione un Pais...   '}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Select Country Modal"
        style={customStyles}
      >
        <input
          type="text"
          placeholder="Buscar país..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 mb-2 border-b border-gray-300 "
        />
        <div className="bg-nav max-h-96 overflow-y-auto">
          {filteredCountries.map((country) => (
            <div
              key={country.label}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-nav"
              onClick={() => handleCountrySelect(country)}
            >
              <div>{country.label}</div>
              <img src={country.bandera} alt={`Flag of ${country.label}`} className="w-10 h-6" />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
  
  
};

export default CountrySelect;
