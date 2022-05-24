import { NavLink } from "react-router-dom";
import s from"./left-bar.module.css";

const LeftBar = () => {
  return (
    <div className={s.leftbar}>
      <ul class={`${s.leftbar__list} `}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          <li>Dialogs</li>
        </NavLink>
        <NavLink
          to="/News"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          <li>News</li>
        </NavLink>
        <NavLink
          to="/Music"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          <li>Music</li>
        </NavLink>
        <NavLink
          to="/Settings"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          <li class={s.leftbar__top}>Settings</li>
        </NavLink>
        <NavLink
          to="/Friends"
          className={(navData) =>
            navData.isActive ? s.active : s.leftbar__list_i
          }
        >
          <li class={s.leftbar__top}>Friends</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default LeftBar;
