import s from "./ReadMoreComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";

const ReadMoreComponent = (href: any) => {
  return (
    <Link className={s.read__link} href={href.href}>
      Read more <Image className={s.read__arrow} src={Arrow} alt="Arrow" />
    </Link>
  );
};

export default ReadMoreComponent;
