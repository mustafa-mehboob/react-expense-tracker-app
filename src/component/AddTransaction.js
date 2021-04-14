import React, {useState, useContext} from 'react';
import {GlobalContext} from '../Context/Gloabalstate'

export const AddTransaction = () => {

    const [discription, setdiscription] = useState('');
    const [transactionamount, settransactionamount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            discription,
            transactionamount: +transactionamount
        }

        addTransaction(newTransaction); 
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="add-tlist">
                    <label htmlFor="discription">
                        Discription
                    <input 
                        type="text"
                        placeholder="Detail of transaction amount"
                        id="discription" 
                        value={discription}
                        onChange={(e) => setdiscription(e.target.value)}
                    />
                    </label>
                </div>

                <div className="add-tlist">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    <input 
                        type="number"
                        placeholder="Entre transaction amount"
                        id="transactionamount"
                        value={transactionamount}
                        onChange={(e) => settransactionamount(e.target.value)}
                    />
                    </label>
                </div>

                <button className="add-button">Add Transactions</button>
            </form>
        </div>
    )
}