import { useState, createElement, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Transaction 1', amount: 100 },
        { id: 2, text: 'Transaction 1', amount: -100 },
    ]
}

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions }}
        >
            {children}
        </GlobalContext.Provider>
    )

}
