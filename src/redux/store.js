import dialogsReducer from "./Dialogs-reducer";
import rightbarReducer from "./RightBar-reducer";

let store = {
  _state: {
    RigthBarPage: {
      postData: [
        { id: 1, message: "hello broo", like: 12 + " likes" },
        { id: 2, message: "hi friend", like: 3 + " likes" },
        { id: 3, message: "hello friend", like: 45 + " likes" },
        { id: 4, message: "hello my best friend", like: 11 + " likes" },
      ],
      newPostText: "You Post",
    },
    messagePage: {
      dialogsData: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Dmitry" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
      ],
      massagesData: [
        { id: 1, massage: "Hi" },
        { id: 2, massage: "I am a normal popoverig" },
        { id: 3, massage: "How are you" },
        { id: 4, massage: "Sveta" },
      ],
      newMessage: "You Message",
    },
    friendsPage: {
      friendsData: [
        { id: 1, friend: "Алейксей Морозов" },
        { id: 2, friend: "Алейксей Скопинцев" },
        { id: 3, friend: "Алейксей Михаил" },
        { id: 4, friend: "Алейксей Федоровчи" },
      ],
    },
  },
  _rerenderReactTree() {
    console.log("render");
  },

  getState() {
    return this._state;
  },
  subscribe(callback) {
    this._rerenderReactTree = callback;
  },

  dispatch(action) {
    this._state.RigthBarPage = rightbarReducer(this._state.RigthBarPage,action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);

    this._rerenderReactTree(this._state);
  },
};

export const addPostClickAction = () => {
  return { type: "ADD-POST" };
};
export const onPostChangeAction = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", text: text };
};

export const addPostAction = () => {
  return { type: "ADD-MESSAGE" };
};
export const onMessageChangeAction = (text) => {
  return { type: "UPDATE-NEW-MESSAGE", text: text };
};

export default store;
