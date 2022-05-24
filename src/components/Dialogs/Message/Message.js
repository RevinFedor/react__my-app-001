import { NavLink, Route, Router } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Massage = (props) => {
  return (
    <div className={s.massage__block_flex}>
      <div className={s.massage__block}>
        <img
          src="https://i.pinimg.com/736x/9f/87/f3/9f87f3a587098ec935f48c85a95a9ae4.jpg"
          alt="ava"
          className={s.massage__img}
        />
        <div className={s.massage}>{props.massage}</div>
      </div>
    </div>
  );
};

export default Massage;
