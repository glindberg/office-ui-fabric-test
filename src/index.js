import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/form";
import ContextProvider from "./context";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
