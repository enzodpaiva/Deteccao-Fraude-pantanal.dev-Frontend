import React, { useState } from 'react';
import './FraudItem.css';
import loadingGif from './icon-loading.gif';

const Item = ({ id: transaction_object }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/analyse-sample', {
        method: 'POST',
        headers: {
          Authorization: apiToken, // Adiciona o cabeçalho de autorização com o token
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction_object) 
      });
      if (response.ok) {
          const data = await response.json();
          console.log('Resposta do servidor:', data.url);
          window.open(data.url, '_blank');
      } else {
        console.log('Erro na resposta do servidor:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }

    setIsLoading(false);
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
        <div>
          {isLoading && (
            <div className="backdrop">
              <img className="loading-gif" src={loadingGif} alt="Loading" />
            </div>
          )}
          <button className={`visualize-button ${isLoading ? 'loading' : ''}`} onClick={isLoading ? null : handleView}>
            {isLoading ? '' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
