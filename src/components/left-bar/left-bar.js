import s from"./left-bar.module.css";

const LeftBar = () => {
  return (
    <div className={s.leftbar}>
      <ul class={ `${s.leftbar__list} `}>
        <a href="#">
          <li>Profile</li>
        </a>
        <a href="#">
          <li>Message</li>
        </a>
        <a href="#">
          <li>News</li>
        </a>
        <a href="#">
          <li>Music</li>
        </a>
        <a href="#">
          <li class={s.leftbar__top}>Settings</li>
        </a>
      </ul>
    </div>
  );
};

export default LeftBar;
