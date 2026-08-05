import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import StatusBadge from "./components/common/StatusBadge";

import account from "./data/account";
import trades from "./data/trades";

import {
  getCurrentBalance,
  getCurrentDrawdown,
  getRemainingDrawdown,
  getDailyLoss,
  getRemainingDailyLoss,
  getRiskStatus,
} from "./utils/calculations";

function App() {
  // Calculate current balance
  const currentBalance = getCurrentBalance(
    account.startingBalance,
    trades
  );

  // Calculate drawdown
  const currentDrawdown = getCurrentDrawdown(
    account.startingBalance,
    currentBalance
  );

  const remainingDrawdown = getRemainingDrawdown(
    account.maxDrawdown,
    currentDrawdown
  );

  // Today's loss
  const today = "2026-08-03";

  const dailyLoss = getDailyLoss(trades, today);

  const remainingDailyLoss = getRemainingDailyLoss(
    account.dailyLossLimit,
    dailyLoss
  );

  // Risk status
  const riskStatus = getRiskStatus(
    remainingDrawdown,
    remainingDailyLoss
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <Header />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <SummaryCard
          title="Starting Balance"
          value={`$${account.startingBalance.toLocaleString()}`}
        />

        <SummaryCard
          title="Current Balance"
          value={`$${currentBalance.toLocaleString()}`}
        />

        <SummaryCard
          title="Remaining Drawdown"
          value={`$${remainingDrawdown.toLocaleString()}`}
        />

        <SummaryCard
          title="Today's Loss"
          value={`$${dailyLoss.toLocaleString()}`}
        />

      </div>

      {/* Risk Status */}
      <div className="bg-white rounded-xl shadow-md mt-8 p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Risk Status
        </h2>

        <StatusBadge status={riskStatus} />

        <div className="mt-6 space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-600">
              Current Drawdown
            </span>

            <span className="font-bold text-gray-900">
              ${currentDrawdown.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">
              Remaining Daily Loss
            </span>

            <span className="font-bold text-gray-900">
              ${remainingDailyLoss.toLocaleString()}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;