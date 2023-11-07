import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";

const HeaderComponent = () => {
  return (
    <header className={s.header}>
      <div className={s.header__box}>
        <div className={s.header__logo}>
          <p>Logo</p>
        </div>

        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li className={s.header__item}>About us</li>
            <li className={s.header__item}>Services ⌵</li>
            <li className={s.header__item}>Blog</li>
            <li className={s.header__item}>Careers</li>
          </ul>
        </nav>

        <div className={s.header__contents}>
          <div className={s.header__flag}>Flag ⌵</div>
          <MainButtonComponent text="Get in touch" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
