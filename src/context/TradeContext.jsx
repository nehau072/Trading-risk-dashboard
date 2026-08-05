import { createContext, useState } from "react";
import initialTrades from "../data/trades";


export const TradeContext = createContext();



export function TradeProvider({ children }) {


  const [trades, setTrades] = useState(initialTrades);



  const addTrade = (trade) => {

    setTrades((prevTrades) => [

      ...prevTrades,

      {
        ...trade,
        id: Date.now(),
      }

    ]);

  };



  const removeTrade = (id) => {

    setTrades((prevTrades) =>
      prevTrades.filter(
        (trade) => trade.id !== id
      )
    );

  };



  return (

    <TradeContext.Provider

      value={{
        trades,
        addTrade,
        removeTrade,
      }}

    >

      {children}

    </TradeContext.Provider>

  );

}