import trades from "../../data/trades";


function RiskAlert() {


  const startingBalance = 100000;


  const dailyLossLimit = 3000;


  const maxDrawdownLimit = 10000;



  const totalLoss = trades
    .filter((trade)=>trade.pnl < 0)
    .reduce(
      (sum, trade)=>sum + Math.abs(trade.pnl),
      0
    );



  const currentBalance =
    startingBalance -
    trades.reduce(
      (sum, trade)=>sum + trade.pnl,
      0
    );



  const drawdown =
    startingBalance - currentBalance;



  let status = "Safe";
  let message = "Your account is within safe limits.";
  let color = "bg-green-100 text-green-700";



  if(drawdown >= maxDrawdownLimit){

    status = "Critical";

    message =
    "Maximum drawdown limit breached.";

    color =
    "bg-red-100 text-red-700";

  }

  else if(totalLoss >= dailyLossLimit){

    status = "Warning";

    message =
    "Daily loss limit is almost reached.";

    color =
    "bg-yellow-100 text-yellow-700";

  }



  return (

    <div className={`rounded-xl p-6 mt-8 ${color}`}>

      <h2 className="text-xl font-bold mb-2">
        Risk Alert
      </h2>


      <h3 className="text-2xl font-bold">
        {status}
      </h3>


      <p className="mt-2">
        {message}
      </p>



      <div className="mt-4">

        <p>
          Current Drawdown:
          <b> ${drawdown}</b>
        </p>


        <p>
          Total Loss:
          <b> ${totalLoss}</b>
        </p>


      </div>


    </div>

  );

}


export default RiskAlert;