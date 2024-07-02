import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux store"; // Make sure this path is correct
import './index.css'; // Assuming you meant index.css instead of index.js
import App from "./app.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
