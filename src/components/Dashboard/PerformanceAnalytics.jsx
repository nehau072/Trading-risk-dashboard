import trades from "../../data/trades";

function PerformanceAnalytics() {
  const totalTrades = trades.length;

  const winningTrades = trades.filter(
    (trade) => trade.pnl > 0
  );

  const losingTrades = trades.filter(
    (trade) => trade.pnl < 0
  );

  const totalWins = winningTrades.length;
  const totalLosses = losingTrades.length;

  const winRate = ((totalWins / totalTrades) * 100).toFixed(1);

  const netProfit = trades.reduce(
    (sum, trade) => sum + trade.pnl,
    0
  );

  const avgWin =
    totalWins > 0
      ? (
          winningTrades.reduce((sum, trade) => sum + trade.pnl, 0) /
          totalWins
        ).toFixed(0)
      : 0;

  const avgLoss =
    totalLosses > 0
      ? (
          losingTrades.reduce((sum, trade) => sum + trade.pnl, 0) /
          totalLosses
        ).toFixed(0)
      : 0;

  const analytics = [
    {
      title: "Total Trades",
      value: totalTrades,
    },
    {
      title: "Winning Trades",
      value: totalWins,
    },
    {
      title: "Losing Trades",
      value: totalLosses,
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
    },
    {
      title: "Net Profit",
      value: `$${netProfit.toLocaleString()}`,
      color: netProfit >= 0 ? "text-green-600" : "text-red-600",
    },
    {
      title: "Average Win",
      value: `$${avgWin}`,
      color: "text-green-600",
    },
    {
      title: "Average Loss",
      value: `$${avgLoss}`,
      color: "text-red-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Performance Analytics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {analytics.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-4 bg-gray-50"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h3
              className={`text-2xl font-bold mt-2 ${
                item.color || "text-gray-900"
              }`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerformanceAnalytics;