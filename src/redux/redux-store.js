import { combineReducers, legacy_createStore as createStore } from "redux";
import rightbarReducer from "./RightBar-reducer";
import messageReducer from "./Dialogs-reducer";

let reducers = combineReducers({
    
  RigthBarPage: rightbarReducer,
  messagePage: messageReducer,
});

let store = createStore(reducers);


export default store