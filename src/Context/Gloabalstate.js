import React, { createContext, useReducer } from 'react';

// import appreducer
import AppReducer from './AppReducer';

// create a initial state
const initialState = {
    transactions: []
}

// create Glbal context
export const GlobalContext = createContext(initialState);

//create the provider for the global context
export const GlobalProvider = ({children}) => {

    const [state , dispatch] = useReducer(AppReducer , initialState)

    // Actions

    // delete action
    function delTransaction(id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }

    // add action
    function addTransaction(Transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : Transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}