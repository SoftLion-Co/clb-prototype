import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";

const HeaderComponent = () => {
  return (
    <header className={s.header}>
      <div>
        <p>Logo</p>
      </div>

      <nav className={s.header__}>
        <ul className={s.header__}>
          <li className={s.header__}>About us</li>
          <li className={s.header__}>Services ⌵</li>
          <li className={s.header__}>Blog</li>
          <li className={s.header__}>Careers</li>
        </ul>
      </nav>

      <div className={s.header__}>
        <div className={s.header__}>Flag ⌵</div>
        <MainButtonComponent text="Get in touch" />
      </div>
    </header>
  );
};

export default HeaderComponent;
