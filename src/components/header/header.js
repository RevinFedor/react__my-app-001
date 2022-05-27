import s from './header.module.css'
import React from "react";
const Header = () => {
    return (
      <header class={s.header}>
        <div class="container">
          <a href="#" class="header__link">
            <img
              src="https://template.canva.com/EADZ4IftVI8/2/0/400w-pTNSPEj6my4.jpg"
              alt=""
              class={s.header__img}
            />
          </a>
        </div>
      </header>
    );
};

export default Header;
