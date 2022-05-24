import s from "./Friend__Item.module.css";

const Friend__Item = (props) => {
  return (
    <div className={s.Friend__Item_block}>
      <img
        src="https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg"
        alt="ava"
        className={s.Friend__img}
      />
      <div className={s.massage}>{props.friend}</div>
    </div>
  );
};

export default Friend__Item;
