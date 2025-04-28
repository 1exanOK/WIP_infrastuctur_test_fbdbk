// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AdminPanel from "./AdminPanel";  // импортируем компонент

ReactDOM.render(
  <React.StrictMode>
    <AdminPanel />  {/* Рендерим компонент */}
  </React.StrictMode>,
  document.getElementById("root")
);

