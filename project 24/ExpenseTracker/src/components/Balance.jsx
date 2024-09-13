const Balance = () => {
    return (
        <div className="mb-5">
            <h1 className="text-xl">Your Balance</h1>
            <h1 className="text-2xl">$ 260.00</h1>
            <div className="card bg-neutral text-neutral-content w-96 mt-3">
                <div className="card-body text-center">
                    <div className="flex w-full divide-x divide-gray-300">
                        <div className="w-1/2 p-6">
                            <h2 className="text-xl font-bold">Income</h2>
                            <p className="text-green-600 text-xl">$ 500.00</p>
                        </div>

                        <div className="w-1/2 p-6">
                            <h2 className="text-lg font-bold">Expense</h2>
                            <p className="text-red-600 text-xl">$ 240.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
