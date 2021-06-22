import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router";
import App from "./App"
// import Nav from "./components/Navbar";


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

