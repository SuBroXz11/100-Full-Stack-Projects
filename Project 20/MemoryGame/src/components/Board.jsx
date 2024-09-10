import { useState, useEffect } from 'react';
import Card from './Card';
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const Board = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    useEffect(() => {
        const cardImages = [img1, img2, img3, img4];

        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({ id: index, image, isFlipped: false }));

        setCards(shuffledCards);
    }, []);

    const handleClick = (id) => {
        if (flippedIndices.length === 2 || cards[id].isFlipped || matchedPairs.includes(id)) return;

        const updatedCards = cards.map(card =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
        setCards(updatedCards);

        setFlippedIndices(prev => [...prev, id]);

        if (flippedIndices.length === 1) {
            const firstCardId = flippedIndices[0];
            const secondCardId = id;

            if (cards[firstCardId].image === cards[secondCardId].image) {
                setMatchedPairs(prev => [...prev, firstCardId, secondCardId]);
                setFlippedIndices([]);
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

    return (
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
        </div>
    );
};

export default Board;
