import { NavLink, Route, Router } from "react-router-dom";
import s from "./Dialogs.module.css";
import Dialog from "./DialogsItem/Dialog";
import Massage from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsDataArray = props.state.dialogsData.map((el) => {
    return <Dialog name={el.name} id={el.id} />;
  });

  let massagesDataArray = props.state.massagesData.map((el) => {
    return <Massage massage={el.massage} />;
  });

  let newDialogButton = React.createRef();

  let addPost = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    let text = newDialogButton.current.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsDataArray}</div>

      <div className={s.massages__items}>{massagesDataArray}</div>
      <div className={s.massages__block}>
        <textarea
          onChange={onMessageChange}
          ref={newDialogButton}
          value={props.state.newMessage}
        ></textarea>
        <button onClick={addPost}>Добавить пост</button>
      </div>
    </div>
  );
};

export default Dialogs;
