
import s from "./Dialogs.module.css";
import Dialog from "./DialogsItem/Dialog";
import Massage from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

   let state = props.messagePage;

  let dialogsDataArray = state.dialogsData.map((el) => {
    return <Dialog name={el.name} id={el.id} />;
  });

  let massagesDataArray = state.massagesData.map((el) => {
    return <Massage massage={el.massage} />;
  });
  let newDialogButton = React.createRef();
  let addPost = () => {
    props.sendAddPost();
  };
  let onMessageChange = () => {
    let text = newDialogButton.current.value;
    props.updateMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsDataArray}</div>

      <div className={s.massages__items}>
        <div>{massagesDataArray}</div>
        <div className={s.massages__block}>
          <textarea
            onChange={onMessageChange}
            ref={newDialogButton}
            value={state.newMessage}
            className={s.massages__block_area}
          ></textarea>
          <button className={s.massages__block_btn} onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
