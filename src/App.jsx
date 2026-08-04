import account from "./data/account";
import trades from "./data/trades";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Trading Risk Dashboard
      </h1>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Account Information
        </h2>

        <p>
          <strong>Trader:</strong> {account.traderName}
        </p>

        <p>
          <strong>Account:</strong> {account.accountName}
        </p>

        <p>
          <strong>Starting Balance:</strong> $
          {account.startingBalance.toLocaleString()}
        </p>

        <p>
          <strong>Current Balance:</strong> $
          {account.currentBalance.toLocaleString()}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Trade History
        </h2>

        {trades.map((trade) => (
          <div
            key={trade.id}
            className="border-b py-3 flex justify-between"
          >
            <span>{trade.date}</span>
            <span>{trade.symbol}</span>
            <span>{trade.type}</span>

            <span
              className={
                trade.pnl >= 0
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              ${trade.pnl}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;