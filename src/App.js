import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeAndExpenses from './components/IncomeAndExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeAndExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
