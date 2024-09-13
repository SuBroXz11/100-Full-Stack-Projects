import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="mb-5">
            <div className="header">
                <h1 className="text-xl">History</h1>
                <hr className="mt-2" />
            </div>
            {transactions ? (
                <div className="mt-3 space-y-3">
                    {transactions.map((transaction, id) => {
                        return (<Transaction transaction={transaction} id={id} key={id} />)
                    })}

                </div>
            ) : (
                <p className="mt-3 text-gray-500">No transaction available</p>
            )}
        </div>
    );
};

export default TransactionList;
