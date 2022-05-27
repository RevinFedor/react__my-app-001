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
    <BrowserRouter>
      <div className="wrap">
        <div className="container">
          <Header />
          <div className="wrap-inner">
            <LeftBar />
            <Routes>
              <Route
                path="/profile"
                element={
                  <RightBar
                    
                    // RigthBarPage={props.AppState.RigthBarPage}
                    // dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="dialogs/*"
                element={
                  <DialogsContainer />
                }
              />
              <Route
                path="News/*"
                
              />
              <Route
                path="Music/*"
                
              />
              <Route
                path="Settings/*"
                
              />
              {/* <Route
                path="/Friends/*"
                element={<Friends state={props.AppState.friendsPage} />}
              /> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
