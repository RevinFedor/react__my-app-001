import { rerenderReactTree } from "../render";

let state = {
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
    newMessage: "You Message"
  },
  friendsPage: {
    friendsData: [
      { id: 1, friend: "Алейксей Морозов" },
      { id: 2, friend: "Алейксей Скопинцев" },
      { id: 3, friend: "Алейксей Михаил" },
      { id: 4, friend: "Алейксей Федоровчи" },
    ],
  },
};
export let addPost = () =>{
  
  let newPost = {
    id: 4,
    message: state.RigthBarPage.newPostText,
    like: 0 + " likes",
  };
  state.RigthBarPage.postData.push(newPost)
  rerenderReactTree(state);
  state.RigthBarPage.newPostText="";
}

export let addMessage = () =>{
  
  let newMessage = {
    id: 4,
    massage: state.messagePage.newMessage,
  };
  state.messagePage.massagesData.push(newMessage);
  rerenderReactTree(state);
  state.messagePage.newMessage="";
}

export let updateNewPostText = (text) => {
  state.RigthBarPage.newPostText=text;
  rerenderReactTree(state);
};

export let updateNewMessage = (text) =>{
  state.messagePage.newMessage=text;
  rerenderReactTree(state);
}





export default state;