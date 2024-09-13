import { Balance, TransactionList, NewTransaction } from './components';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5 text-2xl text-white animate-pulse">
          Expense Tracker
        </div>
        <div className="components mt-5 border p-6">
          <Balance />
          <TransactionList />
          <NewTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
