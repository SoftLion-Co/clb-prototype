import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import "./../globals.css";
import s from "./layout.module.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import classNames from "classnames";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const manrope = localFont({
  src: [
    {
      path: "./../../style/fonts/manrope-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../style/fonts/manrope-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../style/fonts/manrope-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../style/fonts/manrope-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} className={classNames(manrope.className)}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={s.main}>
            <HeaderComponent />
            <div className={s.page} id="layout">
              {children}
            </div>
            <FooterComponent />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
