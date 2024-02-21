//---------------------- Importing required libararies ----------------------//
import React from 'react';
import Transactions from './components/transactions/Transactions';
import './App.css'


//-------------------- App Function --------------------//
const App = () => {

  return (
    <div className='app-container'>
      <Transactions />
    </div>
  );
};

export default App;