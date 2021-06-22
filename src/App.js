import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";
import router from "./router";
import Nav from "./components/Navbar";
import'./App.css'
const App = () => {
  return (

    <BrowserRouter>
      <div>
        <Nav />
        {router}
      </div>
    </BrowserRouter>

  );
};

export default App;
