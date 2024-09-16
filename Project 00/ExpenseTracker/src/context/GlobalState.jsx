import { useState, createElement, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        // { id: 1, text: 'Transaction 1', amount: 255 },
        // { id: 2, text: 'Transaction 2', amount: -500 },
        // { id: 3, text: 'Transaction 3', amount: 700 },
        // { id: 4, text: 'Momo', amount: -130 },
    ]
}

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }
    // Add transaction
    function addTransaction(transaction) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
        >
            {children}
        </GlobalContext.Provider>
    )

}
