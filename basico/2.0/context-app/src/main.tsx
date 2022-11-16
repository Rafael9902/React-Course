import React from "react";
import ReactDOM from "react-dom/client";
import { ContextApp } from "./ContextApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextApp />
    </React.StrictMode>
  </BrowserRouter>
);
