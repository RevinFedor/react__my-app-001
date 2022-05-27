
let initialState = {
    postData: [
      { id: 1, message: "hello broo", like: 12 + " likes" },
      { id: 2, message: "hi friend", like: 3 + " likes" },
      { id: 3, message: "hello friend", like: 45 + " likes" },
      { id: 4, message: "hello my best friend", like: 11 + " likes" },
    ],
    newPostText: "You Post",
};

const rightbarReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 4,
        message: state.newPostText,
        like: 0 + " likes",
      };

      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default rightbarReducer;
