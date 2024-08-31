import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyProvider } from "./context/MyContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
