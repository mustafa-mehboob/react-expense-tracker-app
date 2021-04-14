import React from 'react';
import './App.css';

//import component
import {Header} from './component/Header';
import {Balance} from './component/Balance';
import {Expence} from './component/Expence';
import { TransactionHistory } from './component/TransactionHistory';
import { AddTransaction } from './component/AddTransaction';

// import globalprovider
import {GlobalProvider} from './Context/Gloabalstate'

function App() {
  return (
    <GlobalProvider>
      <div className="app">
      <Header />
      
      <div className="container">
        <Balance />
        <Expence /> 
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div> 
    </GlobalProvider>
    
  );
}

export default App;
