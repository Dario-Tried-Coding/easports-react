import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./Components/App"
import "./index.scss"

ReactDOM
  .createRoot(document.querySelector("#root"))
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )