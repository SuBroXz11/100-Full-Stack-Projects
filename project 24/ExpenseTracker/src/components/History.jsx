const History = () => {
    const transactions = [
        { id: 1, name: 'Cash', amount: 500, type: 'income' },
        { id: 2, name: 'Book', amount: -40, type: 'expense' },
        { id: 3, name: 'Camera', amount: -200, type: 'expense' },
    ];

    return (
        <div className="mb-5">
            <div className="header">
                <h1 className="text-xl">History</h1>
                <hr className="mt-2" />
            </div>
            <div className="mt-3 space-y-3">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="card bg-base-100 shadow-md flex justify-between items-center p-4 relative w-96"
                    >
                        <div className="flex justify-between w-full">
                            <span className="text-white">{transaction.name}</span>
                            <span
                                className={`${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                                    }`}
                            >
                                {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
                            </span>
                        </div>
                        {/* Side color indicator */}
                        <div
                            className={`absolute top-0 right-0 h-full w-1 ${transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'
                                }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
