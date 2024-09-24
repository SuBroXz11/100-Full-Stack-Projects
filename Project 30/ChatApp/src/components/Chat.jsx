import { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from "firebase/firestore"
import { auth, db } from '../firebase-config'

export const Chat = ({ room }) => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room))
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;
        // console.log(newMessage);
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage(""); // empty the message as the message is already sent
    }
    return (
        <div className="chat-app">
            <div>
                {messages.map((message) => (
                    <h1>{message.text}</h1>
                ))}
            </div>
            <form className="new-message-form" onSubmit={handleSubmit}>
                <input type="text" className="new-message-input"
                    placeholder="Type your message here..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button className="send-button">
                    send
                </button>
            </form>
        </div>
    )
}
