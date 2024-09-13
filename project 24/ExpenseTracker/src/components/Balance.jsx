import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount)
    const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="mb-5">
            <h1 className="text-xl">Your Balance</h1>
            <h1 className="text-2xl">{totalAmount <= 0 ? '+ $ 0.00' : totalAmount}</h1>
            <div className="card bg-neutral text-neutral-content w-96 mt-3">
                <div className="card-body text-center p-0">
                    <div className="flex w-full divide-x divide-gray-300">
                        <div className="w-1/2 p-6">
                            <h2 className="text-xl font-bold">Income</h2>
                            <p className="text-green-600 text-xl">{totalAmount <= 0 ? '+ $ 0.00' : totalAmount}</p>
                        </div>

                        <div className="w-1/2 p-6">
                            <h2 className="text-lg font-bold">Expense</h2>
                            <p className="text-red-600 text-xl">- $ {expense}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
