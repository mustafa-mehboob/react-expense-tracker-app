import React, { useContext } from 'react';

// import globalprovider
import {GlobalContext, GlobalProvider} from '../Context/Gloabalstate';

// import transaction
import {Transaction} from './Transaction';

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="t-list">
                {transactions.map (transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
} 