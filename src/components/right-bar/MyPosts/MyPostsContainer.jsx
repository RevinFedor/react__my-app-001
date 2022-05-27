import React from "react";
import { connect } from "react-redux";
import { addPostClickAction, onPostChangeAction } from "../../../redux/store";

import MyPost from "./MyPosts";

// const MyPostContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();
//         let addPostClick = () => {
//           store.dispatch(addPostClickAction());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(onPostChangeAction(text));
//         };
//         return (
//           <MyPost
//             addPostClick={addPostClick}
//             updateNewPostText={onPostChange}
//             postData={state.RigthBarPage.postData}
//             newPostText={state.RigthBarPage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };


let mapStateToProps = (state) =>{
  return {
    postData: state.RigthBarPage.postData,
    newPostText: state.RigthBarPage.newPostTexte,
  };
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(onPostChangeAction(text));
    },
    addPostClick: () => {
      dispatch(addPostClickAction());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

 

export default MyPostContainer;
