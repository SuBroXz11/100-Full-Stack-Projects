import { useState, useEffect } from 'react';
import List from './List';
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    const [lists, setLists] = useState(() => {
        const savedLists = localStorage.getItem('todo-lists');
        return savedLists ? JSON.parse(savedLists) : [];
    });

    useEffect(() => {
        localStorage.setItem('todo-lists', JSON.stringify(lists));
    }, [lists]);

    const addNewLists = () => {
        const newListObj = { id: uuidv4(), text: "" }; // Start with an empty text
        const newLists = [...lists, newListObj];
        setLists(newLists);
    };

    const deleteList = (id) => {
        if (window.confirm("Are you sure you want to delete this list?")) {
            setLists(lists.filter((list) => list.id !== id));
        }
    };

    const updateListText = (id, newText) => {
        setLists(lists.map((list) =>
            list.id === id ? { ...list, text: newText } : list
        ));
    };

    const cards = [
        "card-info",
        "card-warning",
        "card-success",
        "card-primary",
        "card-danger",
    ];

    const randomizeBg = () => {
        const random = Math.floor(Math.random() * cards.length);
        return cards[random];
    };

    return (
        <div>
            <button className="btn-info text-center" onClick={addNewLists}>Add list +</button>
            <div className="container container-sm d-flex" style={{ gap: 25, flexWrap: "wrap" }}>
                {lists.map((list) => (
                    <List
                        key={list.id}
                        list={list}
                        onClick={deleteList}
                        onTextChange={updateListText}
                        cardBg={randomizeBg()}
                    />
                ))}
            </div>
        </div>
    );
}
