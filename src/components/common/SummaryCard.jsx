import {
  Wallet,
  TrendingUp,
  ShieldAlert,
  AlertTriangle
} from "lucide-react";


function SummaryCard({ title, value }) {


  const icons = {

    "Starting Balance": Wallet,

    "Current Balance": TrendingUp,

    "Remaining Drawdown": ShieldAlert,

    "Today's Loss": AlertTriangle,

  };


  const Icon = icons[title];



  return (

    <div
      className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.03]
      hover:-translate-y-1
      hover:shadow-2xl
      "
    >


      <div className="flex items-center justify-between">


        <div>


          <p className="
            text-gray-400
            text-sm
            font-medium
          ">
            {title}
          </p>



          <h2
            className="
            text-3xl
            font-bold
            text-white
            mt-3
            "
          >

            {value}

          </h2>


        </div>



        {
          Icon && (

            <div
              className="
              bg-slate-800
              p-3
              rounded-xl
              "
            >

              <Icon
                size={28}
                className="text-blue-400"
              />

            </div>

          )
        }



      </div>



    </div>

  );

}


export default SummaryCard;