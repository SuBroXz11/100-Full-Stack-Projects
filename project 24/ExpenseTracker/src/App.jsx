import { Balance, History, NewExpense } from './components';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-12 text-2xl text-white">
        Expense Tracker
      </div>
      <div className="components mt-8">
        <Balance />
        <History />
        <NewExpense />
      </div>
    </div>
  );
}

export default App;
