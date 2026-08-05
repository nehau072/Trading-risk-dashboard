import {
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import equityData from "../../data/equityData";


function EquityChart() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 mt-8">


      <h2 className="text-2xl font-bold text-white mb-6">
        Equity Curve
      </h2>



      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <AreaChart data={equityData}>


          <defs>

            <linearGradient
              id="equityGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#22c55e"
                stopOpacity={0.4}
              />

              <stop
                offset="95%"
                stopColor="#22c55e"
                stopOpacity={0}
              />

            </linearGradient>


          </defs>



          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />



          <XAxis
            dataKey="day"
            tick={{
              fill: "#94a3b8"
            }}
          />



          <YAxis
            tick={{
              fill: "#94a3b8"
            }}
          />



          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "10px",
              color: "#ffffff"
            }}
          />



          <Area
            type="monotone"
            dataKey="balance"
            stroke="#22c55e"
            strokeWidth={3}
            fill="url(#equityGradient)"
          />



          <Line
            type="monotone"
            dataKey="balance"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#22c55e"
            }}
            activeDot={{
              r: 7,
              fill: "#16a34a"
            }}
          />


        </AreaChart>


      </ResponsiveContainer>



    </div>

  );

}


export default EquityChart;