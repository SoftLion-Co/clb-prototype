import React from "react";
import Image from "next/image";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import Question from "@/images/question.svg";

import Picture from "@/images/home-hero-test.png";
import classNames from "classnames";

const InputField = ({
  type,
  name,
  label,
  placeholder,
}: {
  type: string;
  name: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <div className={s.form__group}>
      <label className={s.form__label}>{label}</label>
      <input
        type={type}
        className={s.form__input}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

const ContactUsSection = () => {
  return (
    <div className={s.container}>
      <MainTitleComponent className={s.form__title} title={"Contact Us"} />

      <form
        className={s.form}
        action="/contact"
        method="post"
        encType="multipart/form-data"
      >
        <div className={s.form__content}>
          <div className={s.form__box}>
            <div className={s.form__inputs}>
              <InputField
                type="text"
                name="name"
                label="First Name"
                placeholder=""
              />
              <InputField
                type="text"
                name="lastname"
                label="Last Name"
                placeholder=""
              />
              <InputField
                type="text"
                name="email"
                label="Email"
                placeholder=""
              />
              <InputField
                type="text"
                name="phone"
                label="Phone Number"
                placeholder=""
              />
              <InputField
                type="text"
                name="company"
                label="Company Name"
                placeholder=""
              />
              <InputField
                type="text"
                name="topic"
                label="Topic of Enquiry"
                placeholder=""
              />
            </div>

            <div className={s.form__textarea}>
              <div className={classNames(s.form__textarea_box, s.form__label)}>
                <label htmlFor="message">Your message (optional)</label>
                <Image
                  src={Question}
                  alt="Question"
                  title="Enter a short description of your offers"
                />
              </div>

              <textarea
                className={s.form__message}
                id="message"
                name="message"
                placeholder=""
              ></textarea>
            </div>
          </div>

          <div>
            <Image className={s.form__picture} src={Picture} alt="Picture" />
          </div>
        </div>
      </form>

      <MainButtonComponent text={"Contact us"} />
    </div>
  );
};

export default ContactUsSection;
