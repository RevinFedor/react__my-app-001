import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import LeftBar from "./components/left-bar";
import RightBar from "./components/right-bar";


const App = () => {
  return (
    <div class="wrap">
      <div class="container">
        <Header />
        <div class="wrap-inner">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default App;
