import React, { createContext, useState, useContext } from "react";

const Pcontext = createContext();

const ContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const contextValue = {
        showModal,
        toggleModal,
        closeModal
    };

    return (
        <Pcontext.Provider value={contextValue}>
            {children}
        </Pcontext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(Pcontext)
}

export { ContextProvider, Pcontext };
