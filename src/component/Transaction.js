import React, { useContext } from 'react';
import {GlobalContext} from '../Context/Gloabalstate';


export const Transaction = ({transaction}) => {

    const { delTransaction } = useContext(GlobalContext);


    const sign = transaction.transactionamount < 0 ? '-' :'+';

    return (
        <li className={transaction.transactionamount < 0 ? 'e-negative' : 'e-positive' }>
                    {transaction.discription}
                    <span>{sign}${Math.abs(transaction.transactionamount)}</span>
                    <button className="delete" onClick={() => delTransaction(transaction.id)} >X</button>
                </li>
    )
}