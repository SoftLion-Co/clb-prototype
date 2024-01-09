"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import Picture from "@/images/home-hero-test.png";
import classNames from "classnames";
import useVacancies from "@/hooks/useVacancies";
import InputField from "@/components/form/InputField";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";

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

const ContactUsSection = ({ cv }: { cv?: boolean }) => {
  const locale = useLocale();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const t = useTranslations("homePage.contactUs");

  const topics = [
    "",
    "generalInquiry",
    "productInformation",
    "supportRequest",
    "other",
  ];

  const translatedTopics = topics.map((topic) => t(`topics.${topic}`));

  const vacancies = useVacancies();

  const fieldsWithoutCV = [
    { type: "text", name: "firstname" },
    { type: "tel", name: "phone" },
    { type: "text", name: "lastname" },
    { type: "text", name: "company" },
    { type: "email", name: "email" },
  ];

  const fieldsCV = [
    { type: "text", name: "firstname" },
    { type: "tel", name: "phone" },
    { type: "text", name: "lastname" },
    { type: "text", name: "time" },
    { type: "email", name: "email" },
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLLIElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownClick = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      vacancy: value,
    }));
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const dropdown = document.querySelector(`.${s.dropdown}`);
      if (dropdown && !dropdown.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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

    try {
      const response = await fetch(url, reqOptions);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.status === "mail_sent") {
          setFormData({
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
          console.log("Form submitted successfully!");
        } else {
          console.error("Form submission failed. Status:", jsonResponse.status);
        }
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const fields = cv ? fieldsCV : fieldsWithoutCV;

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MainTitleComponent
          title={cv ? t("letsWorkWithUS") : t("contactUsHeading")}
        />
        <div className={classNames(s.container, s.form__container)}>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.form__content}>
              <div className={s.form__box}>
                <div className={s.form__inputs}>
                  {fields.map((field) => (
                    <InputField
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      label={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleInputChange}
                    />
                  ))}
                  <div className={s.form__group}>
                    <div
                      className={s.dropdown}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {cv ? (
                        <p className={s.form__input}>
                          {formData.vacancy || t("appliedVacancy")}
                        </p>
                      ) : (
                        <p className={s.form__input}>
                          {formData.subject || t("topicOfEnquiry")}
                        </p>
                      )}
                      <ul
                        className={s.dropdown__list}
                        style={{ display: isDropdownOpen ? " " : "none" }}
                      >
                        {cv
                          ? vacancies.map((vacancy) => (
                              <li
                                key={vacancy.id}
                                onClick={() => {
                                  handleDropdownClick(
                                    (vacancy.acf as any)[`vacancies_${locale}`]
                                  );
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {(vacancy.acf as any)[`vacancies_${locale}`]}
                              </li>
                            ))
                          : translatedTopics.map((topic) => (
                              <li
                                key={topic}
                                onClick={(e) => {
                                  handleInputChange({
                                    target: { name: "subject", value: topic },
                                  } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {topic || t(`topics.selectTopic`)}
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {!cv ? (
                  <div className={s.form__textarea}>
                    <textarea
                      className={s.form__message}
                      id="message"
                      name="message"
                      placeholder={t("yourMessage")}
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                ) : (
                  <div className={s.form__attach}>
                    <InputField
                      type="file"
                      name="cvFile"
                      label={null}
                      value={formData.cvFile ? formData.cvFile.name : ""}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <MainButtonComponent
              text={cv ? t("submitButton") : t("contactUsButton")}
              padding="8px 8px 8px 16px"
              customGap="16px"
              rotatedArrow={true}
            />
          </form>

          <Image className={s.form__picture} src={Picture} alt="Picture" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
