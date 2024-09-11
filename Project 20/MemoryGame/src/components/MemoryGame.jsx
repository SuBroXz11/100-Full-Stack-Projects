import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    useEffect(() => {
        const cardImages = [img1, img2, img3, img4];
        // for creating  create pairs of cards
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({ id: index, image, isFlipped: true })); // Initially flipped

        setCards(shuffledCards);

        // Hide the cards after 3 seconds
        setTimeout(() => {
            const hiddenCards = shuffledCards.map(card => ({ ...card, isFlipped: false }));
            setCards(hiddenCards);
        }, 2000); // 2 seconds after the game starts, hide all cards
    }, []);



    const handleClick = (id) => {
        if (flippedIndices.length === 2 || cards[id].isFlipped || matchedPairs.includes(id)) return;

        const updatedCards = cards.map(card =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
        setCards(updatedCards);

        setFlippedIndices(prev => [...prev, id]); // Add the clicked card index to flippedIndices

        if (flippedIndices.length === 1) {
            const firstCardId = flippedIndices[0];
            const secondCardId = id;

            if (cards[firstCardId].image === cards[secondCardId].image) {
                setMatchedPairs(prev => [...prev, firstCardId, secondCardId]);
                setFlippedIndices([]); // Reset flipped indices for the next pair
            } else {
                setTimeout(() => {
                    const resetCards = cards.map(card =>
                        card.id === firstCardId || card.id === secondCardId
                            ? { ...card, isFlipped: false }
                            : card
                    );
                    setCards(resetCards);
                    setFlippedIndices([]);
                }, 1000);
            }
        }
    };
    useEffect(() => {
        if (matchedPairs.length === cards.length && cards.length > 0) {
            toast.success("Congratulations! You've matched all cards!");
        }
    }, [matchedPairs, cards]);

    return (
        <>
            <div className="board grid grid-cols-3 gap-4 justify-center items-center mt-10">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        isFlipped={card.isFlipped || matchedPairs.includes(card.id)}
                        onClick={handleClick}
                    />
                ))}
                {matchedPairs.length === cards.length && (
                    <div className="flex justify-center mt-4">
                        <button className="btn btn-primary" onClick={() => window.location.reload()}>
                            Play Again
                        </button>
                    </div>
                )}
            </div>

            <ToastContainer />
        </>
    );

};

export default MemoryGame;
