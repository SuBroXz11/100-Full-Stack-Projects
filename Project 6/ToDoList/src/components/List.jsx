import { useEffect, useState, useRef } from 'react';
import { Style, Icons, DeleteIcon } from './Style';
import { MdDeleteForever, MdOutlineNoteAlt } from 'react-icons/md';

export default function NewList({ list, onClick, onTextChange, cardBg }) {
    const [newCardBg, setNewCardBg] = useState();
    const textareaRef = useRef(null);

    useEffect(() => {
        !newCardBg && setNewCardBg(cardBg);
    }, [newCardBg]);

    const focusTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const handleTextChange = (e) => {
        onTextChange(list.id, e.target.value);
    };

    return (
        <Style className={`card ${newCardBg}`}>
            <div className="card-header text-right">
                <Icons>
                    <MdOutlineNoteAlt onClick={focusTextarea} />
                    <DeleteIcon>
                        <MdDeleteForever onClick={() => onClick(list.id)} />
                    </DeleteIcon>
                </Icons>
            </div>
            <div className="card-body">
                <textarea
                    ref={textareaRef}
                    value={list.text}
                    onChange={handleTextChange}
                    style={{ border: 'none', outline: 'none' }}
                />
            </div>
        </Style>
    );
}
