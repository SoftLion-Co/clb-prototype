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
  subject?: string;
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
    [key: string]: boolean | undefined;
  }

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

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
    setSelectedDropdownValue(value);
    setFormData((prevData) => ({
      ...prevData,
      subject: value,
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
    const errors: ValidationErrors = {
      firstname: !validateName(formData.firstname),
      lastname: !validateName(formData.lastname),
      email: !validateEmail(formData.email),
      phone: !validatePhoneNumber(formData.phone),
      company: false,
      subject: false,
      message: false,
      cvFile: false,
    };

    if (cv) {
      errors.cvFile = !formData.cvFile;
    } else {
      errors.company = !validateCompanyName(formData.company);
      errors.subject = !formData.subject || formData.subject.trim() === "";
    }

    setValidationErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleTestButtonClick = () => {
    if (validateForm()) {
      setFormMessage("Form is valid. Ready to submit!");
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

    setValidationErrors({});
  };

  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const fieldName = cv ? "vacancy" : "subject";

    formData.set(fieldName, selectedDropdownValue || "");

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
          handleFormReset();
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

  const renderTextarea = () => {
    const isTouched = touchedFields.message;
    const isValid = !validationErrors.message;
    const textareaClassNames = classNames(s.form__message, {
      [s.inputValid]: isTouched && isValid,
      [s.inputInvalid]: isTouched && !isValid,
    });

    return (
      <div className={s.form__textarea}>
        <input
          className={textareaClassNames}
          type="text"
          id="message"
          name="message"
          placeholder={t("yourMessage")}
          value={formData.message}
          onChange={handleInputChange}
        />
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

  const renderDropdown = () => {
    const isTouched = touchedFields.subject;
    const isValid = !validationErrors.subject;
    const inputClassNames = classNames(s.form__input, {
      [s.inputValid]: isTouched && isValid,
      [s.inputInvalid]: isTouched && !isValid,
      [s.cv]: cv,
    });

    const dropdownValue = cv ? formData.vacancy : formData.subject;

    return (
      <div className={s.form__group}>
        <div
          className={s.dropdown}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <input
            type="hidden"
            name={cv ? "vacancy" : "subject"}
            value={dropdownValue}
          />
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
                    onClick={() => {
                      handleDropdownClick(topic);
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
              <MainButtonComponent
                text="Get in touch"
                typeButton="MainContactUsButton"
                onClick={handleTestButtonClick}
              />

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
