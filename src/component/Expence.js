import React, {useContext} from 'react';

// import globalcontext
import { GlobalContext } from '../Context/Gloabalstate';

export const Expence = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionamounts = transactions.map(transaction => transaction.transactionamount);

    const income = transactionamounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionamounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <div className="expence-container">
            <div>
                <h2>Income</h2>
                <p className="e-income">
                {income}
                </p>
            </div>

            <div>
                <h2>Expence</h2>
                <p className="e-expence">
                {expense}
                </p>
            </div>
        </div>
    )
}