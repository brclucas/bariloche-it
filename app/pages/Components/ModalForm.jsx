import React, { useState } from 'react';

const ModalForm = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Formulario enviado:', formData);
    // Cerrar el modal después de enviar el formulario
    onRequestClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onRequestClose}>
              X
            </button>
            <h2>Llenar Formulario</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Correo Electrónico:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mensaje:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
