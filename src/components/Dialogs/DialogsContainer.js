import React from "react";
import { connect } from "react-redux";
import { addPostAction, onMessageChangeAction } from "../../redux/store";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState().messagePage;
//         let addPost = () => {
//           store.dispatch(addPostAction());
//         };
//         let onMessageChange = (text) => {
//           store.dispatch(onMessageChangeAction(text));
//         };
//         return (
//           <Dialogs
//             sendAddPost={addPost}
//             updateMessageChange={onMessageChange}
//             messagePage={store.getState().messagePage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) =>{
  return {
    messagePage: state.messagePage
  };
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageChange: (text) => {
      dispatch(onMessageChangeAction(text));
    },
    sendAddPost: () => {
      dispatch(addPostAction());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
