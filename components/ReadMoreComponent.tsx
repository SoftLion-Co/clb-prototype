import s from "./ReadMoreComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/images/vectors/arrow.svg";

const ReadMoreComponent = (id: any) => {
  return (
    <Link className={s.read__link} href={`/blog/${id.id}`}>
      Read more <Image className={s.read__arrow} src={Arrow} alt="Arrow" />
    </Link>
  );
};

export default ReadMoreComponent;
