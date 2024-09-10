import React from 'react';

const Card = ({ id, image, isFlipped, onClick }) => {
    return (
        <div
            className={`card w-20 h-28 bg-base-200 rounded-lg shadow-md m-2 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
            onClick={() => onClick(id)}
        >
            {isFlipped ? (
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="card" />
            ) : (
                <div className="card-back w-full h-full bg-primary rounded-lg"></div>
            )}
        </div>
    );
};

export default Card;
