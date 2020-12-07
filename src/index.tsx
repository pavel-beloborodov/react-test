import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import configureStore from "./store";

const history = createBrowserHistory();

const initialState = {};

// @ts-ignore
const store = configureStore(initialState);

Modal.setAppElement(document.querySelector("#modal") as HTMLElement);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
