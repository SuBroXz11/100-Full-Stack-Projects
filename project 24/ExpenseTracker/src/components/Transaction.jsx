import React from 'react'

const Transaction = ({ transaction, id }) => {
    // console.log(transaction);

    return (
        <div
            className="card bg-base-100 shadow-md flex justify-between items-center p-4 relative w-96" key={id}>
            <div className="flex justify-between w-full">
                <span className="text-white">{transaction.text}    <span className={`${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>( ${transaction.amount})</span></span>
                <span
                    className={`${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {transaction.amount > 0
                        ? `+${transaction.amount}`
                        : transaction.amount}
                </span>
            </div>
            <div
                className={`absolute top-0 right-0 h-full w-1 ${transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'
                    }`}
            ></div>
            <button
                className="btn btn-error btn-sm absolute bottom-3 right-3"
            >
                Delete
            </button>
        </div>
    )
}

export default Transaction
