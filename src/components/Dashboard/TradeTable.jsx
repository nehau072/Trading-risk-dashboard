import { useState } from "react";
import trades from "../../data/trades";


function TradeTable() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");



  const filteredTrades = trades
    .filter((trade)=>{

      const searchMatch =
        trade.symbol
          .toLowerCase()
          .includes(search.toLowerCase());


      const filterMatch =
        filter === "All" ||
        (filter === "Profit" && trade.pnl > 0) ||
        (filter === "Loss" && trade.pnl < 0);


      return searchMatch && filterMatch;

    })

    .sort((a,b)=>{

      if(sort === "profit"){
        return b.pnl - a.pnl;
      }


      if(sort === "loss"){
        return a.pnl - b.pnl;
      }


      return 0;

    });




  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 mt-8">


      <h2 className="text-2xl font-bold text-white mb-6">
        Trade History
      </h2>




      {/* Controls */}

      <div className="flex flex-wrap gap-4 mb-6">


        <input

          type="text"

          placeholder="Search symbol..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          outline-none
          "

        />




        <select

          value={filter}

          onChange={(e)=>setFilter(e.target.value)}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          "

        >

          <option value="All">
            All Trades
          </option>


          <option value="Profit">
            Profitable
          </option>


          <option value="Loss">
            Losing
          </option>


        </select>




        <select

          value={sort}

          onChange={(e)=>setSort(e.target.value)}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          "

        >

          <option value="default">
            Sort
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


            <tr className="border-b border-slate-700 text-gray-400">


              <th className="py-4">
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


          {
            filteredTrades.map((trade)=>(


              <tr

                key={trade.id}

                className="
                border-b
                border-slate-800
                hover:bg-slate-800
                transition
                "

              >


                <td className="py-4 text-gray-300">

                  {trade.date}

                </td>




                <td className="text-white font-semibold">

                  {trade.symbol}

                </td>





                <td>


                  <span

                    className={
                      trade.type === "Buy"
                      ?
                      "bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                      :
                      "bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm"
                    }

                  >

                    {trade.type}

                  </span>


                </td>





                <td>


                  <span

                    className={
                      trade.pnl >= 0
                      ?
                      "bg-green-500/20 text-green-400 px-3 py-1 rounded-full"
                      :
                      "bg-red-500/20 text-red-400 px-3 py-1 rounded-full"
                    }

                  >

                    {trade.pnl >= 0 ? "+" : ""}
                    ${trade.pnl}

                  </span>


                </td>



              </tr>


            ))
          }



          </tbody>


        </table>


      </div>



    </div>


  );

}


export default TradeTable;