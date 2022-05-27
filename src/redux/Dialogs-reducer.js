
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = {
        id: 4,
        massage: state.newMessage,
      };

      state.massagesData.push(newMessage);
      state.newMessage = "";
      return state;
    case "UPDATE-NEW-MESSAGE":
      state.newMessage = action.text;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
