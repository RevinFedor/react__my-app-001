import s from './header.module.css'

const Header = () => {
    return (
      <header class={s.header}>
        <div class="container">
          <a href="#" class="header__link">
            <img
              src="https://img2.freepng.ru/20180204/gbw/kisspng-macintosh-mac-os-x-lion-macos-macbook-operating-sy-apple-logo-5a77a762126b40.8775341115177910740755.jpg"
              alt=""
              class={s.header__img}
            />
          </a>
        </div>
      </header>
    );
};

export default Header;
