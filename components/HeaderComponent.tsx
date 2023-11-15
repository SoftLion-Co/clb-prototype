import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className={s.header}>
      <div className={s.header__box}>
        <div className={s.header__logo}>
          <Link href={"/"}>
            <p>LOGO</p>
          </Link>
        </div>

        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              <Link href="/about-us">About us</Link>
            </li>
            <li className={s.header__item}>Services ⌵</li>
            <li className={s.header__item}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={s.header__item}>
              <Link href="/careers">Careers</Link></li>
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
