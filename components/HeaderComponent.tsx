import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";

const HeaderComponent = () => {
  return (
    <div className={s.header}>
      <div>
        <p>Logo</p>
      </div>

      <div>
        <nav>
          <ul>
            <li>About us</li>
            <li>Services ⌵</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>
      </div>

      <div>
        <div>Flag ⌵</div>
        <MainButtonComponent text="Get in touch" />
      </div>
    </div>
  );
};

export default HeaderComponent;
