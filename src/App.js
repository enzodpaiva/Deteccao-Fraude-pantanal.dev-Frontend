import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FraudsList from './pages/FraudsList';

const App = () => {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frauds" element={<FraudsList />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;