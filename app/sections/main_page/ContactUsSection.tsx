"use client";

import React, { useState } from "react";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import Image from "next/image";
import Picture from "@/images/home-hero-test.png";
import classNames from "classnames";
import Question from "@/images/vectors/question.svg";

const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={s.form__group}>
      <label className={s.form__label}>{label}</label>
      <input
        type={type}
        className={s.form__input}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    const req = await fetch(
      "https://softlion.blog/wp-json/contact-form-7/v1/contact-forms/215/feedback",
      reqOptions
    );
    const response = await req.json();
    console.log(response);
  };

  return (
    <section className={s.container}>
      <MainTitleComponent className={s.form__title} title={"Contact Us"} />
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form__content}>
          <div className={s.form__box}>
            <div className={s.form__inputs}>
              <InputField
                type="text"
                name="firstname"
                label="First Name:"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <InputField
                type="tel"
                name="phone"
                label="Phone Number:"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <InputField
                type="text"
                name="lastname"
                label="Last Name:"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              <InputField
                type="text"
                name="company"
                label="Company Name:"
                value={formData.company}
                onChange={handleInputChange}
              />
              <InputField
                type="email"
                name="email"
                label="Email:"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className={s.form__group}>
                <label className={s.form__label}>Topic of Enquiry:</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={s.form__input}
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Information">
                    Product Information
                  </option>
                  <option value="Support Request">Support Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div>
            <Image className={s.form__picture} src={Picture} alt="Picture" />
          </div>
        </div>

        <button type="submit" className={s.form__button}>
          Contact us
        </button>
      </form>
    </section>
  );
};

export default ContactUsSection;
