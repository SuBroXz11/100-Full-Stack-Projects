import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAmount('');
        setText('')
    };
    return (
        <div className="max-w-md mx-auto p-4 shadow-lg rounded-md">
            <h3 className="text-lg font-bold mb-4">Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Text</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter text..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">
                            Amount (negative - expense, positive - income)
                        </span>
                    </label>
                    <input
                        type="number"
                        className="input input-bordered w-full"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn w-full bg-purple-500 hover:bg-purple-700 text-white"
                >
                    Add transaction
                </button>
            </form>
        </div>
    );
};

export default NewTransaction;
