import React, { useState, useEffect } from 'react';
import Card from './Card';

const Board = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    useEffect(() => {
        // Replace with your own images
        const cardImages = [
            'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
            'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
            'https://static.vecteezy.com/system/resources/thumbnails/036/053/722/small/ai-generated-cat-wearing-heart-shaped-sunglasses-lying-on-a-pillow-free-photo.jpeg',
            'https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480',
            'https://cdn.prod.website-files.com/63502781e169750d8cdc7832/653e2340acd2104c5fa10ad1_25afad30d7d3e89abcd1166b717e588511d391dcb8eb5482ea66c7f76a9350ad89020c172a60b263432a5c3934dfe662451b1a34c57ee520e2442bc06a4ccf892684460c5e23110431fcec9452b4350e507ce502d3bd437ec5b5696070251c86140693f2.jpeg',
        ];

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
