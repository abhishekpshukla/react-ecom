import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./Context";
import registerServiceWorker from "./registerServiceWorker";

const app = (
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
