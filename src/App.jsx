import account from "./data/account";
import trades from "./data/trades";

import {
  getCurrentBalance,
  getCurrentDrawdown,
  getRemainingDrawdown,
  getDailyLoss,
  getRemainingDailyLoss,
  getRiskStatus,
  getWinRate,
  getWinningTrades,
  getLosingTrades,
} from "./utils/calculations";

function App() {
  const currentBalance = getCurrentBalance(
    account.startingBalance,
    trades
  );

  const currentDrawdown = getCurrentDrawdown(
    account.startingBalance,
    currentBalance
  );

  const remainingDrawdown = getRemainingDrawdown(
    account.maxDrawdown,
    currentDrawdown
  );

  const today = "2026-08-03";

  const dailyLoss = getDailyLoss(trades, today);

  const remainingDailyLoss = getRemainingDailyLoss(
    account.dailyLossLimit,
    dailyLoss
  );

  const riskStatus = getRiskStatus(
    remainingDrawdown,
    remainingDailyLoss
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Trading Risk Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-3">
        <p>Current Balance: ${currentBalance.toLocaleString()}</p>

        <p>Current Drawdown: ${currentDrawdown.toLocaleString()}</p>

        <p>
          Remaining Drawdown: $
          {remainingDrawdown.toLocaleString()}
        </p>

        <p>Today's Loss: ${dailyLoss.toLocaleString()}</p>

        <p>
          Remaining Daily Loss: $
          {remainingDailyLoss.toLocaleString()}
        </p>

        <p>Risk Status: {riskStatus}</p>

        <hr />

        <p>Win Rate: {getWinRate(trades)}%</p>

        <p>Winning Trades: {getWinningTrades(trades)}</p>

        <p>Losing Trades: {getLosingTrades(trades)}</p>
      </div>
    </div>
  );
}

export default App;