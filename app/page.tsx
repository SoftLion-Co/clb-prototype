import s from "./page.module.scss";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <div className={s.main}>
      <HeaderComponent />
    </div>
  );
}
