import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import MainList from "./components/MainList";

function App() {
  return (
    <div>
      <AppNavbar />
     <MainList/>
    </div>
  );
}

export default App;
