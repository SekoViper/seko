import React from 'react';
import './whatsapp.css';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const handleClick = () => {
    // const phoneNumber = '+233249320950';

    // Open a WhatsApp chat with the specified phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <FaWhatsapp size={32} />
    </div>
  );
};

export default Whatsapp;
