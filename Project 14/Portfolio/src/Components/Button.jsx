import React from 'react';
import { useGlobalContext } from '../Context/Context';

const Button = () => {
    const { toggleModal } = useGlobalContext();

    return (
        <div className="sticky-button-container">
            <button
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 border-b-2 border-emerald-700 hover:border-emerald-500 rounded hover:animate-bounce"
                style={{ borderRadius: '8px' }}
                onClick={toggleModal}
            >
                Contact Me
            </button>
        </div>

    );
};

export default Button;
