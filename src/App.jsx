import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import StatusBadge from "./components/common/StatusBadge";
import ProgressBar from "./components/common/ProgressBar";
import EquityChart from "./components/dashboard/EquityChart";

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

  const dailyLoss = getDailyLoss(
    trades,
    today
  );

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

      
      <Header />

      
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

      
      <div className="bg-white rounded-xl shadow-md mt-8 p-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Risk Status
        </h2>

        <div className="mt-4">
          <StatusBadge status={riskStatus} />
        </div>

        <div className="mt-8 space-y-8">

          

          <div>

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                Current Drawdown
              </span>

              <span>
                ${currentDrawdown.toLocaleString()}
              </span>

            </div>

            <ProgressBar
              value={currentDrawdown}
              maxValue={account.maxDrawdown}
              color="bg-red-500"
            />

            <p className="text-sm text-gray-500 mt-2">
              Remaining Drawdown:
              <strong>
                {" "}
                ${remainingDrawdown.toLocaleString()}
              </strong>
            </p>

          </div>

          

          <div>

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                Daily Loss
              </span>

              <span>
                ${dailyLoss.toLocaleString()}
              </span>

            </div>

            <ProgressBar
              value={dailyLoss}
              maxValue={account.dailyLossLimit}
              color="bg-yellow-500"
            />

            <p className="text-sm text-gray-500 mt-2">
              Remaining Daily Loss:
              <strong>
                {" "}
                ${remainingDailyLoss.toLocaleString()}
              </strong>
            </p>

          </div>

        </div>

      </div>

      

      <EquityChart />

    </div>
  );
}

export default App;