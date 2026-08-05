import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import StatusBadge from "./components/common/StatusBadge";
import ProgressBar from "./components/common/ProgressBar";

import EquityChart from "./components/dashboard/EquityChart";
import TradeTable from "./components/dashboard/TradeTable";
import PerformanceAnalytics from "./components/dashboard/PerformanceAnalytics";
import RiskAlert from "./components/dashboard/RiskAlert";

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

    <div className="min-h-screen bg-slate-950 p-8">


      <Header />



      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">


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

      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg mt-8 p-8">


        <h2 className="text-2xl font-bold text-white">
          Risk Status
        </h2>



        <div className="mt-4">

          <StatusBadge status={riskStatus} />

        </div>




        <div className="mt-8 space-y-8">



          {/* Current Drawdown */}

          <div>


            <div className="flex justify-between mb-2">


              <span className="font-semibold text-gray-200">
                Current Drawdown
              </span>


              <span className="text-gray-300">
                ${currentDrawdown.toLocaleString()}
              </span>


            </div>



            <ProgressBar
              value={currentDrawdown}
              maxValue={account.maxDrawdown}
              color="bg-red-500"
            />



            <p className="mt-2 text-sm text-gray-400">

              Remaining Drawdown :

              <strong className="text-white">

                {" "}
                ${remainingDrawdown.toLocaleString()}

              </strong>


            </p>


          </div>





          {/* Daily Loss */}


          <div>


            <div className="flex justify-between mb-2">


              <span className="font-semibold text-gray-200">
                Daily Loss
              </span>


              <span className="text-gray-300">
                ${dailyLoss.toLocaleString()}
              </span>


            </div>



            <ProgressBar
              value={dailyLoss}
              maxValue={account.dailyLossLimit}
              color="bg-yellow-500"
            />



            <p className="mt-2 text-sm text-gray-400">

              Remaining Daily Loss :

              <strong className="text-white">

                {" "}
                ${remainingDailyLoss.toLocaleString()}

              </strong>


            </p>


          </div>



        </div>


      </div>





      {/* Risk Alert */}

      <RiskAlert />





      {/* Analytics */}

      <PerformanceAnalytics />





      {/* Equity Curve */}

      <EquityChart />





      {/* Trade History */}

      <TradeTable />



    </div>

  );

}


export default App;