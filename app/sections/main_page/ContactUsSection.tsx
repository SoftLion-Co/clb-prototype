"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import Picture from "@/images/our_advantages_test/advantages-image-1.png";
import Arrow from "@/images/vectors/arrow-menu.svg";
import classNames from "classnames";
import useVacancies from "@/hooks/useVacancies";
import InputField from "@/components/form/InputField";
import { useTranslations } from "next-intl";
import useLocale from "@/hooks/useLocale";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateCompanyName,
} from "@/hooks/useValidation";

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
  const t = useTranslations("homePage.contactUs");
  const vacancies = useVacancies();

  const topics = [
    "",
    "generalInquiry",
    "productInformation",
    "supportRequest",
    "other",
  ];

  const translatedTopics = topics.map((topic) => t(`topics.${topic}`));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

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

  interface ValidationErrors {
    firstname: boolean;
    lastname: boolean;
    email: boolean;
    phone: boolean;
    company: boolean;
    message: boolean;
    subject: boolean;
    [key: string]: boolean | undefined;
  }

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    company: false,
    message: false,
    subject: false,
  });

  const [touchedFields, setTouchedFields] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    company: false,
    message: false,
    subject: false,
  });

  const fieldsWithoutCV = [
    { type: "text", name: "firstname" },
    { type: "text", name: "lastname" },
    { type: "email", name: "email" },
    { type: "tel", name: "phone" },
    { type: "text", name: "company" },
  ];

  const fieldsCV = [
    { type: "text", name: "firstname" },
    { type: "text", name: "lastname" },
    { type: "email", name: "email" },
    { type: "tel", name: "phone" },
    { type: "text", name: "time" },
  ];

  const fields = cv ? fieldsCV : fieldsWithoutCV;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLLIElement>
  ) => {
    let { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setTouchedFields((prevFields) => ({
      ...prevFields,
      [name]: !!value,
    }));

    let isValid = true;
    if (value) {
      switch (name) {
        case "firstname":
        case "lastname":
          isValid = validateName(value);
          break;
        case "email":
          isValid = validateEmail(value);
          break;
        case "phone":
          isValid = validatePhoneNumber(value);
          break;
        case "company":
          isValid = validateCompanyName(value);
          break;
        default:
          isValid = true;
      }
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));
  };

  const handleDropdownClick = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      vacancy: value,
    }));

    setTouchedFields((prevFields) => ({ ...prevFields, subject: true }));

    const isValid = value.trim() !== "";
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      subject: !isValid,
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

  const validateForm = () => {
    const errors = {
      firstname: !validateName(formData.firstname),
      lastname: !validateName(formData.lastname),
      email: !validateEmail(formData.email),
      phone: !validatePhoneNumber(formData.phone),
      company: !validateCompanyName(formData.company),
      subject: formData.subject.trim() === "",
      message: false,
    };

    setValidationErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleTestButtonClick = async () => {
    if (validateForm()) {
      await handleSubmit();
      handleFormReset();
      setFormMessage("Form submitted successfully!");
    } else {
      setFormMessage("Validation failed. Please check your inputs.");
    }
  };

  const handleFormReset = () => {
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

    setTouchedFields({
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
      company: false,
      message: false,
      subject: false,
    });

    setValidationErrors({
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
      company: false,
      message: false,
      subject: false,
    });
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }

    const formElement = e
      ? e.currentTarget
      : document.querySelector(".yourFormClass");

    if (!(formElement instanceof HTMLFormElement)) {
      console.error("Form element is not found or not a form!");
      return;
    }

    const formData = new FormData(formElement);

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
        if (jsonResponse.status === "mail_sent") {
          console.log("Form submitted successfully!");
          handleFormReset(); 
        } else {
          console.error("Form submission failed. Status:", jsonResponse.status);
        }
      } else {
        console.error("Server response error:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const renderInputField = (field: {
    type: string;
    name: string;
    label?: string;
  }) => {
    const isTouched = touchedFields[field.name as keyof typeof touchedFields];
    const isValid =
      !validationErrors[field.name as keyof typeof validationErrors];
    const shouldShowValidation = isTouched;

    return (
      <InputField
        key={field.name}
        type={field.type}
        name={field.name}
        label={field.label || field.name}
        value={(formData as any)[field.name]}
        onChange={handleInputChange}
        isValid={shouldShowValidation && isValid}
        isInvalid={shouldShowValidation && !isValid}
        className={field.name === "cvFile" ? s.form__cv : ""}
        cv={cv}
      />
    );
  };

  const renderDropdown = () => {
    const isTouched = touchedFields.subject;
    const isValid = !validationErrors.subject;
    const inputClassNames = classNames(s.form__input, {
      [s.inputValid]: isTouched && isValid,
      [s.inputInvalid]: isTouched && !isValid,
      [s.cv]: cv,
    });

    return (
      <div className={s.form__group}>
        <div
          className={s.dropdown}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p className={inputClassNames}>
            {cv ? (
              <>
                {formData.vacancy || t("appliedVacancy")}
                <Image
                  className={classNames(s.arrow, {
                    [s.arrow__open]: isDropdownOpen,
                  })}
                  src={Arrow}
                  alt="Arrow"
                />
              </>
            ) : (
              <>
                {formData.subject || t("topicOfEnquiry")}
                <Image
                  className={classNames(s.arrow, {
                    [s.arrow__open]: isDropdownOpen,
                  })}
                  src={Arrow}
                  alt="Arrow"
                />
              </>
            )}
          </p>
          <ul
            className={s.dropdown__list}
            style={{ display: isDropdownOpen ? "" : "none" }}
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
    );
  };

  const renderTextarea = () => {
    const isTouched = touchedFields.message;
    const isValid = !validationErrors.message;
    const textareaClassNames = classNames(s.form__message, {
      [s.inputValid]: isTouched && isValid,
      [s.inputInvalid]: isTouched && !isValid,
    });

    return (
      <div className={s.form__textarea}>
        <textarea
          className={textareaClassNames}
          id="message"
          name="message"
          placeholder={t("yourMessage")}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
    );
  };

  const renderAttachFile = () => (
    <InputField
      className={classNames(s.form__cv, { [s.cv]: cv }, s.form__attach)}
      type="file"
      name="cvFile"
      label={null}
      value={formData.cvFile ? formData.cvFile.name : ""}
      onChange={handleInputChange}
    />
  );

  const boxInputs = (
    <div className={s.form__box}>
      <div className={s.form__inputs}>
        {fields.map(renderInputField)}
        {renderDropdown()}
        {cv && renderAttachFile()}
      </div>
      {!cv && renderTextarea()}
    </div>
  );

  const buttonComponent = (
    <MainButtonComponent
      text={cv ? t("submitButton") : t("contactUsButton")}
      padding="9px 8px 9px 16px"
      rotatedArrow={true}
      customGap="12px"
    />
  );

  const buttonComponentCV = <MainButtonComponent text={t("submitButton")} />;

  return (
    <section className={s.box}>
      <div className={s.background}>
        <MainTitleComponent
          title={cv ? t("letsWorkWithUS") : t("contactUsHeading")}
        />
        <div className={classNames(s.container, s.form__container)}>
          <form
            className={classNames(s.form, { [s.cv]: cv, [s.form__custom]: cv })}
            onSubmit={handleSubmit}
          >
            <div className={s.form__content}>{boxInputs}</div>
            {cv}

            <div className={s.form__test}>
              {/* {cv ? buttonComponentCV : buttonComponent} */}
              <div className={s.form__buttons}>
                <button
                  type="button"
                  onClick={() => handleTestButtonClick()}
                  className={s.testButton}
                >
                  Test
                </button>
              </div>

              {formMessage && (
                <div className={s.formMessage}>{formMessage}</div>
              )}
            </div>
          </form>
          <Image className={s.form__picture} src={Picture} alt="Picture" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
