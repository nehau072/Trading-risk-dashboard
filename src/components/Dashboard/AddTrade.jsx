import { useState, useContext } from "react";
import { TradeContext } from "../../context/TradeContext";


function AddTrade() {


  const { addTrade } = useContext(TradeContext);



  const [formData, setFormData] = useState({

    date: "",
    symbol: "",
    type: "Buy",
    pnl: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  const handleSubmit = (e) => {

    e.preventDefault();



    if(
      !formData.date ||
      !formData.symbol ||
      !formData.pnl
    ){

      alert("Please fill all fields");

      return;

    }



    addTrade({

      ...formData,

      pnl: Number(formData.pnl),

    });



    setFormData({

      date: "",
      symbol: "",
      type: "Buy",
      pnl: "",

    });


  };




  return (

    <div
      className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      shadow-lg
      p-6
      mt-8
      "
    >


      <h2 className="text-2xl font-bold text-white mb-6">

        Add New Trade

      </h2>




      <form
        onSubmit={handleSubmit}
        className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-4
        "
      >



        <input

          type="date"

          name="date"

          value={formData.date}

          onChange={handleChange}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          "

        />





        <input

          type="text"

          name="symbol"

          placeholder="Symbol (EUR/USD)"

          value={formData.symbol}

          onChange={handleChange}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          "

        />





        <select

          name="type"

          value={formData.type}

          onChange={handleChange}

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

          <option value="Buy">
            Buy
          </option>


          <option value="Sell">
            Sell
          </option>


        </select>






        <input

          type="number"

          name="pnl"

          placeholder="PnL"

          value={formData.pnl}

          onChange={handleChange}

          className="
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-lg
          px-4
          py-2
          "

        />






        <button

          type="submit"

          className="
          md:col-span-4
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          rounded-lg
          py-3
          transition
          "

        >

          + Add Trade

        </button>




      </form>



    </div>

  );

}


export default AddTrade;