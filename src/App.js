import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import Header from "./components/header/header";
import LeftBar from "./components/left-bar/left-bar";
import RightBar from "./components/right-bar/right-bar";
 
const App = (props) => {
  return (
  
const App = () => {
  return (
    <div className="wrap">
      <div className="container">
        <Header />
        <div className="wrap-inner">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
