import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid} from "recharts";
import "./Monitoramento.css";
import React, { useState, useEffect } from 'react';


const Monitoramento = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [frauds, setFrauds] = useState([]);
  
  const fetchTransacao = async () => {
    const response = await fetch('http://localhost:5000/transacoes');
    if (response.ok) {
    const data = await response.json();
    
    if (data.Class === 1) {
      setFrauds((prevFrauds) => [...prevFrauds, data]);

      }
    setTransacoes((prevTransacoes) => [...prevTransacoes, data]);
    }
    // try {
    //   const response = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:5500/random_transaction', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({}) // Objeto JSON vazio
    //   });

      // if (!response.ok) {
      //   throw new Error('Falha na requisição POST');
      // }
    //   const data = await response.json();
    //   // setTransacoes((prevTransacoes) => [...prevTransacoes, data]); // Mantém apenas as últimas 10 transações
    //   console.log('Resposta do servidor:', data);
    // } catch (error) {
    //   console.error('Erro na requisição:', error);
    // }

  };

  useEffect(() => {
    const intervalId = setInterval(fetchTransacao, 5000);
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  useEffect(() => {
    sessionStorage.setItem('frauds', JSON.stringify(frauds));
    console.log(sessionStorage.getItem('frauds'));
  }, [frauds]);

  const calcularFraudesTotal = () => {
    const frauds_amount = transacoes.reduce((total, transacao) => transacao.Class === 1 ? total + 1 : total, 0);
    sessionStorage.setItem('frauds_amount', frauds_amount);
    return transacoes.reduce((total, transacao) => transacao.Class === 1 ? total + 1 : total, 0);
  };

  const calcularValorTotal = () => {
    const somaValores = transacoes.reduce((total, transacao) => total + transacao.Amount, 0);
    return somaValores.toFixed(2);
  };
  
  const calcularValorEconomizado = () => {
    const somaValores = transacoes.reduce((total, transacao) => transacao.Class === 1 ? total + transacao.Amount : total, 0); 
    return somaValores.toFixed(2);
  };


  return (
    <div className="monitoramento">
      <div className="painel-informacoes">
        <div className="economized-value">
          <h3>Prejuízo Evitado</h3>
          <span>R$ {calcularValorEconomizado()}</span>
        </div>
        <div className="total-value">
          <h3>Valor Total</h3>
          <span>R$ {calcularValorTotal()}</span>
        </div>
        <div className="frauds-amount">
          <h3>Transações Fraudulentas</h3>
          <span>{calcularFraudesTotal()}</span>
        </div>
        <div className="transitions-amount">
          <h3>Transações Legitimas</h3>
          <span>{transacoes.length}</span>
        </div>
      </div>
      <div className="graficos">
        <div className="grafico">
          <h3>Transações Fraudulentas</h3>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={[...transacoes.slice(-100)]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Class" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="Class" name="Transações Fraudulentas" stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grafico">
          <h3>Valor das Transações</h3>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={[...transacoes.slice(-100)]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="Amount" name="Valor médio das transações" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Monitoramento;