import { useState } from "react"
import { addDoc } from "firebase/firestore"

export const Chat = () => {
    const [newMessage, setNewMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;
        // console.log(newMessage);
        await addDoc()
    }
    return (
        <div className="chat-app">
            <form className="new-message-form" onSubmit={handleSubmit}>
                <input type="text" className="new-message-input"
                    placeholder="Type your message here..."
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="send-button">
                    send
                </button>
            </form>
        </div>
    )
}
