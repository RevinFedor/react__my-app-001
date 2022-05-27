
import React from "react";
import Friend__Item from "./Friend__Item/Friend__Item";
import s from "./Friends.module.css";

const Friends = (props) => {
 let friendsDataArray = props.state.friendsData.map((el) => {
   return <Friend__Item friend={el.friend} />;
 });
  return (
    <div className={s.friends}>
      <div className={s.friends__items}>
        <div className={s.friends__item}>{friendsDataArray}</div>
      </div>
    </div>
  );
};

export default Friends;
