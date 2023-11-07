import s from "./page.module.scss"
import HeroSection from "./sections/HeroSection"

export default function Home() {
  return (
    <div className={s.home}><HeroSection /></div>
  )
}
 