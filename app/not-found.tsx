import Link from "next/link";
import Image from "next/image";
import s from "./not-found.module.scss";

import LogoBrokers from "@/images/Logo-brokers.svg";

export async function generateMetadata({}) {
  return { title: "Commodities & Logistics Brokers" };
}

export default function NotFound() {
  return (
    <main className={s.container}>
      <div className={s.error}>
        <Image
          className={s.error__image}
          src={LogoBrokers}
          alt="SoftLion"
          height={600}
          width={600}
        />

        <h2 className={s.error__title}>
          Commodities & Logistics Brokers 404:
          <br />
          Page Not Found
        </h2>

        <Link href="/" className={s.error__link}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
