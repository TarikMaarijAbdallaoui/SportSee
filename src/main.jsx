import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import "./index.css";

const application = document.getElementById("root");
const root = ReactDOM.createRoot(application);

/**
 * React Render method and routes for the app
 */
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/user/12" />} />
      <Route path="/user/:id" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
