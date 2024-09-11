const Card = ({ id, image, isFlipped, onClick }) => {
    return (
        <div
            className={`flip-container w-20 h-28 rounded-lg shadow-md m-2 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
            onClick={() => onClick(id)}
        >
            <div className="flipper">
                <div className="flip-front card w-full h-full object-cover rounded-lg">
                    <div className="card-back w-full h-full bg-primary rounded-lg"></div>
                </div>
                <div className="flip-back w-full h-full">
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt="card" />
                </div>
            </div>
        </div>
    );
};

export default Card;
