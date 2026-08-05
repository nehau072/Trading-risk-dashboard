import { useState } from "react";
import trades from "../../data/trades";

const TradeTable = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");


  const filteredTrades = trades
    .filter((trade) => {

      const matchesSearch = trade.symbol
        .toLowerCase()
        .includes(search.toLowerCase());


      const matchesFilter =
        filter === "All" ||
        (filter === "Profit" && trade.pnl > 0) ||
        (filter === "Loss" && trade.pnl < 0);


      return matchesSearch && matchesFilter;

    })
    .sort((a, b) => {

      if (sort === "profit") {
        return b.pnl - a.pnl;
      }

      if (sort === "loss") {
        return a.pnl - b.pnl;
      }

      return 0;

    });



  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-5">
        Trade History
      </h2>


      {/* Controls */}

      <div className="flex flex-wrap gap-4 mb-6">


        {/* Search */}

        <input
          type="text"
          placeholder="Search symbol..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2"
        />


        {/* Filter */}

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >

          <option value="All">
            All Trades
          </option>

          <option value="Profit">
            Profitable Trades
          </option>

          <option value="Loss">
            Losing Trades
          </option>


        </select>



        {/* Sort */}

        <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >

          <option value="default">
            Sort Trades
          </option>

          <option value="profit">
            Highest Profit
          </option>

          <option value="loss">
            Biggest Loss
          </option>


        </select>


      </div>



      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b">

              <th className="py-3">
                Date
              </th>

              <th>
                Symbol
              </th>

              <th>
                Type
              </th>

              <th>
                PnL
              </th>

            </tr>

          </thead>



          <tbody>


            {filteredTrades.map((trade)=>(

              <tr 
                key={trade.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-3">
                  {trade.date}
                </td>


                <td>
                  {trade.symbol}
                </td>


                <td>
                  {trade.type}
                </td>


                <td
                  className={
                    trade.pnl >= 0
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                  }
                >

                  {trade.pnl >= 0 ? "+" : ""}
                  ${trade.pnl}

                </td>


              </tr>

            ))}



          </tbody>


        </table>


      </div>


      {
        filteredTrades.length === 0 && (

          <p className="text-gray-500 text-center mt-5">
            No trades found
          </p>

        )
      }


    </div>

  );

};


export default TradeTable;