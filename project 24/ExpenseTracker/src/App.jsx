import { Balance, History, NewExpense } from './components';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5 text-2xl text-white animate-pulse">
        Expense Tracker
      </div>
      <div className="components mt-5 border p-6">
        <Balance />
        <History />
        <NewExpense />
      </div>
    </div>
  );
}

export default App;
