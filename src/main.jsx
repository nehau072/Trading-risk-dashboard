import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import {
  TradeProvider
} from "./context/TradeContext.jsx";



ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <TradeProvider>

    <App />

  </TradeProvider>

);