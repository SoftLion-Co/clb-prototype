import React from 'react';
import s from './WhyChoose.module.scss';
import ImageAndTextCardsComponent from '@/components/ImageAndTextCardsComponent';
import image from '@/images/home-hero-test.png';
import MainTitleComponent from '@/components/MainTitleComponent';
import { useTranslations } from "next-intl";


interface WhyChooseProps {
  text1: string;
  text2: string;
  text3: string;
}

function WhyChoose({ text1, text2, text3 }: WhyChooseProps) {
  const t = useTranslations("exportConsulting.whyChoose");

  return (
    <div className={s.choose}>
      <MainTitleComponent title={t("whyChooseTitle")} color='blue' />
      <ImageAndTextCardsComponent text={text1} image={image.src} alt="image" color='blue' border/>
      <ImageAndTextCardsComponent text={text2} image={image.src} alt="image" rotate color='white' border/>
      <ImageAndTextCardsComponent text={text3} image={image.src} alt="image" color='white' border/>
    </div>
  );
}

export default WhyChoose;
