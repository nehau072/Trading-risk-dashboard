import { useContext } from "react";
import { TradeContext } from "../../context/TradeContext";


function PerformanceAnalytics() {


  const { trades } = useContext(TradeContext);



  const totalTrades = trades.length;



  const winningTrades = trades.filter(
    (trade) => trade.pnl > 0
  );



  const losingTrades = trades.filter(
    (trade) => trade.pnl < 0
  );



  const totalWins = winningTrades.length;

  const totalLosses = losingTrades.length;




  const winRate =
    totalTrades > 0
      ? ((totalWins / totalTrades) * 100).toFixed(1)
      : 0;




  const netProfit = trades.reduce(
    (sum, trade) => sum + trade.pnl,
    0
  );




  const avgWin =
    totalWins > 0
      ? (
          winningTrades.reduce(
            (sum, trade) => sum + trade.pnl,
            0
          ) / totalWins
        ).toFixed(0)
      : 0;




  const avgLoss =
    totalLosses > 0
      ? (
          losingTrades.reduce(
            (sum, trade) => sum + trade.pnl,
            0
          ) / totalLosses
        ).toFixed(0)
      : 0;





  const grossProfit = winningTrades.reduce(
    (sum, trade) => sum + trade.pnl,
    0
  );



  const grossLoss = Math.abs(
    losingTrades.reduce(
      (sum, trade) => sum + trade.pnl,
      0
    )
  );





  const profitFactor =
    grossLoss > 0
      ? (grossProfit / grossLoss).toFixed(2)
      : 0;





  const bestTrade =
    trades.length > 0
      ? Math.max(...trades.map((trade)=>trade.pnl))
      : 0;



  const worstTrade =
    trades.length > 0
      ? Math.min(...trades.map((trade)=>trade.pnl))
      : 0;







  const analytics = [


    {
      title:"Total Trades",
      value:totalTrades,
    },


    {
      title:"Winning Trades",
      value:totalWins,
    },


    {
      title:"Losing Trades",
      value:totalLosses,
    },


    {
      title:"Win Rate",
      value:`${winRate}%`,
    },


    {
      title:"Net Profit",
      value:`$${netProfit.toLocaleString()}`,
      color:
        netProfit >= 0
        ? "text-green-600"
        : "text-red-600",
    },


    {
      title:"Average Win",
      value:`$${avgWin}`,
      color:"text-green-600",
    },


    {
      title:"Average Loss",
      value:`$${avgLoss}`,
      color:"text-red-600",
    },


    {
      title:"Profit Factor",
      value:profitFactor,
    },


    {
      title:"Best Trade",
      value:`$${bestTrade}`,
      color:"text-green-600",
    },


    {
      title:"Worst Trade",
      value:`$${worstTrade}`,
      color:"text-red-600",
    },


  ];






  return (

    <div className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      shadow-lg
      p-6
      mt-8
      animate-fadeIn
    ">



      <h2 className="
        text-2xl
        font-bold
        text-white
        mb-6
      ">

        Performance Analytics

      </h2>






      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-6
      ">



        {
          analytics.map((item)=>(


            <div

              key={item.title}

              className="
              border
              border-slate-700
              rounded-lg
              p-4
              bg-slate-800
              "

            >


              <p className="
                text-sm
                text-gray-400
              ">

                {item.title}

              </p>



              <h3
                className={`
                  text-2xl
                  font-bold
                  mt-2
                  ${
                    item.color ||
                    "text-white"
                  }
                `}
              >

                {item.value}

              </h3>



            </div>


          ))
        }



      </div>



    </div>

  );

}


export default PerformanceAnalytics;