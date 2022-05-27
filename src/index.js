import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";


import store from "./redux/redux-store";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderReactTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <Provider value={store}>
        <App
          AppState={state}
          store={store}
          
        />
      </Provider>
    </React.StrictMode>
  );
};
rerenderReactTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderReactTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
