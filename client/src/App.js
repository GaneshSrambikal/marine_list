import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import MainList from "./components/MainList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <MainList />
      </div>
    </Provider>
  );
}

export default App;
