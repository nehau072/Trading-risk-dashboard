import trades from "../../data/trades";

function TradeTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Recent Trades
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="bg-gray-100 border-b">

              <th className="text-left p-3">Date</th>

              <th className="text-left p-3">Symbol</th>

              <th className="text-left p-3">Type</th>

              <th className="text-right p-3">P/L</th>

              <th className="text-center p-3">Status</th>

            </tr>
          </thead>

          <tbody>

            {trades.map((trade) => (

              <tr
                key={trade.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-3">
                  {trade.date}
                </td>

                <td className="p-3 font-medium">
                  {trade.symbol}
                </td>

                <td className="p-3">
                  {trade.type}
                </td>

                <td
                  className={`p-3 text-right font-bold ${
                    trade.pnl >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {trade.pnl >= 0 ? "+" : ""}
                  ${trade.pnl.toLocaleString()}
                </td>

                <td className="p-3 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      trade.pnl >= 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {trade.pnl >= 0 ? "Win" : "Loss"}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default TradeTable;