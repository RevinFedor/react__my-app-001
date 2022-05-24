import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
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
                    state={props.AppState.RigthBarPage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                  />
                }
              />
              <Route
                path="dialogs/*"
                element={
                  <Dialogs
                    state={props.AppState.messagePage}
                    addMessage={props.addMessage}
                    updateNewMessage={props.updateNewMessage}
                  />
                }
              />
              <Route
                path="/News"
                element={<RightBar state={props.AppState.RigthBarPage} />}
              />
              <Route
                path="/Music"
                element={<RightBar state={props.AppState.RigthBarPage} />}
              />
              <Route
                path="/Settings"
                element={<RightBar state={props.AppState.RigthBarPage} />}
              />
              <Route
                path="/Friends"
                element={<Friends state={props.AppState.friendsPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
