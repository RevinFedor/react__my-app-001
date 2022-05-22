import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import LeftBar from "./components/left-bar/left-bar";
import RightBar from "./components/right-bar/right-bar";


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
    </div>
  );
};

export default App;
