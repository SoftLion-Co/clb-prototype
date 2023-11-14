"use client";

import React, { ChangeEvent, useState } from "react";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import Image from "next/image";
import Picture from "@/images/home-hero-test.png";
import classNames from "classnames";
import Question from "@/images/vectors/question.svg";
import useVacancies from "@/hooks/useVacancies";
import InputField from "@/components/form/InputField";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  time: string;
  vacancy: string;
  cvFile: File | null;
}

const ContactUsSection = ({ cv }: { cv: boolean }) => {
  const topics = [
    "",
    "General Inquiry",
    "Product Information",
    "Support Request",
    "Other",
  ];
  
  const vacancies = useVacancies();
  
  const fieldsWithoutCV = [
    { type: "text", name: "firstname", label: "First Name:" },
    { type: "tel", name: "phone", label: "Phone Number:" },
    { type: "text", name: "lastname", label: "Last Name:" },
    { type: "text", name: "company", label: "Company Name:" },
    { type: "email", name: "email", label: "Email:" },
  ];
  
  const fieldsCV = [
    { type: "text", name: "firstname", label: "First Name:" },
    { type: "tel", name: "phone", label: "Phone Number:" },
    { type: "text", name: "lastname", label: "Last Name:" },
    {
      type: "text",
      name: "time",
      label: "When you are ready to start working?",
    },
    { type: "email", name: "email", label: "Email:" },
  ];

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    time: "",
    vacancy: "",
    cvFile: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "file"
          ? (e.target as HTMLInputElement).files?.[0] || null
          : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const url = `https://softlion.blog/wp-json/contact-form-7/v1/contact-forms/${
      cv ? 342 : 215
    }/feedback`;

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    await fetch(url, reqOptions);
  };

  const fields = cv ? fieldsCV : fieldsWithoutCV;

  return (
    <section className={s.container}>
      <MainTitleComponent className={s.form__title} title="Contact Us" />
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form__content}>
          <div className={s.form__box}>
            <div className={s.form__inputs}>
              {fields.map((field) => (
                <InputField
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  label={field.label}
                  value={(formData as any)[field.name]}
                  onChange={handleInputChange}
                />
              ))}
              {!cv ? (
                <div className={s.form__group}>
                  <label className={s.form__label}>Topic of Enquiry:</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={s.form__input}
                  >
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic || "Select a topic"}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className={s.form__group}>
                  <label className={s.form__label}>
                    The vacancy you are applying for:
                  </label>
                  <select
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleInputChange}
                    className={s.form__input}
                  >
                    {vacancies.map(vacancy => (
                      <option key={vacancy.id} value={vacancy.acf.vacancies}>
                        {vacancy.acf.vacancies}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {!cv ? (
              <div className={s.form__textarea}>
                <div
                  className={classNames(s.form__textarea_box, s.form__label)}
                >
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
            ) : (
              <div className={s.form__attach}>
                <InputField
                  type="file"
                  name="cvFile"
                  label=""
                  value={formData.cvFile ? formData.cvFile.name : ""}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
          <div>
            <Image className={s.form__picture} src={Picture} alt="Picture" />
          </div>
        </div>
        <button type="submit" className={s.form__button}>
          {cv ? "Submit" : "Contact Us"}
        </button>
      </form>
    </section>
  );
};

export default ContactUsSection;