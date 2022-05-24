import { NavLink, Route, Router } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Dialog = (props) => {
  let id = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={id}>{props.name}</NavLink>
    </div>
  );
};



export default Dialog;
