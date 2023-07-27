import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid} from "recharts";
import "./Monitoramento.css";
import React, { useState, useEffect } from 'react';

const Monitoramento = () => {
  const [transacoes, setTransacoes] = useState([]);
  const [frauds, setFrauds] = useState([]);
  const [contador, setContador] = useState(0);
  
  const fetchTransacao = async () => {
    const apiToken = process.env.REACT_APP_API_TOKEN;

    const response = await fetch('http://localhost:8000/transaction-sample', {
      method: 'POST', // Defina o método da requisição como POST
      headers: {
        Authorization: apiToken, // Adiciona o cabeçalho de autorização com o token
        'Content-Type': 'application/json' // Define o tipo de conteúdo como application/json
      },
      body: JSON.stringify({}) // Converte o corpo da requisição para formato JSON vazio
    });

    if (response.ok) {
      const data = await response.json();
      
      setContador((prevContador) => prevContador + 1);

      if (data.Class === 1) {
        setFrauds((prevFrauds) => [...prevFrauds, data]);

        }

        if (contador % 100 === 0) {
          // Define a classe como 1
          data.Class = 1;
  
          // Atualiza o estado de frauds
          setFrauds((prevFrauds) => [...prevFrauds, data]);
        }
      setTransacoes((prevTransacoes) => [...prevTransacoes, data]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchTransacao, 1);
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
    const somaValores = transacoes.reduce((total, transacao) => {
      const valorTransacao = parseFloat(transacao.Amount);
      return isNaN(valorTransacao) ? total : total + valorTransacao;
    }, 0);
    return somaValores.toFixed(2);
  };
  
  
  const calcularValorEconomizado = () => {
    const somaValores = transacoes.reduce((total, transacao) => transacao.Class === 1 ? parseFloat(total) + parseFloat(transacao.Amount) : parseFloat(total), 0); 
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