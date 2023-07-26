import React, { useState } from 'react';
import './FraudItem.css';

const Item = ({ id: transaction_object }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Lógica para lidar com o botão de aceitar
    setIsVisible(false);
  };

  const handleReject = () => {
    // Lógica para lidar com o botão de recusar
    setIsVisible(false);
  };

  const handleView = async () => {
    const apiToken = process.env.REACT_APP_API_TOKEN;
    const response = fetch('http://localhost:8000/analyse-sample', {
      method: 'POST',
      headers: {
        Authorization: apiToken, // Adiciona o cabeçalho de autorização com o token
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction_object) 
    });
    if (response.ok) {
        const url = await response.json();
        console.log('Resposta do servidor:', url);
        window.open(url, '_blank');
    }
  };

  if (!isVisible) {
    return null; // Não renderizar a div se ela não estiver visível
  }

  return (
    <div className="item">
      <div className="item-id">{transaction_object.Time}</div>
      <div className="item-buttons">
        <button className='accept-button' onClick={handleAccept}></button>
        <button className='reject-button' onClick={handleReject}></button>
        <button className='visualize-button' onClick={handleView}></button>
      </div>
    </div>
  );
};

export default Item;
