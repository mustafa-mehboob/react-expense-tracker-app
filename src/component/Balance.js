import React, { useContext } from 'react';

// import globalcontext
import {GlobalContext} from '../Context/Gloabalstate'


export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionamount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="accbalance">
            <h4>Current Balance</h4>
            <h2>${balance}</h2>
        </div>
    )
}