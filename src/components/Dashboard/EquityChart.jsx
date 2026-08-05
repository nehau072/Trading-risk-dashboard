import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import equityData from "../../data/equityData";

function EquityChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Equity Curve
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={equityData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="day"
            tick={{ fill: "#4b5563" }}
          />

          <YAxis
            tick={{ fill: "#4b5563" }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#2563eb",
            }}
            activeDot={{
              r: 8,
              fill: "#1d4ed8",
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default EquityChart;