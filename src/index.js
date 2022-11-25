import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./Components/App"

ReactDOM
  .createRoot(document.querySelector("#root"))
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )