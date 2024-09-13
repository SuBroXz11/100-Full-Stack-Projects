import { useState } from "react";
const NewExpense = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ text, amount });
        // Handle the transaction logic here
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

export default NewExpense;
