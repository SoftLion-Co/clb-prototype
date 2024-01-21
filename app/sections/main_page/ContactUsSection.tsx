"use client";
import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import s from "./ContactUsSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import Picture from "@/images/our_advantages_test/advantages-image-1.png";
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
import { DatePickerInput } from "@mantine/dates";
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  subject?: string;
  message: string;
  time: Date | null;
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

  const [cvFileInputKey, setCvFileInputKey] = useState(0);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    time: null,
    vacancy: "",
    cvFile: null,
  });

  const [touchedFields, setTouchedFields] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    company: false,
    message: false,
    time: false,
    subject: false,
    vacancy: false,
    cvFile: false,
  });

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      time: null,
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
      time: false,
      subject: false,
      vacancy: false,
      cvFile: false,
    });
    setValidationErrors({});
  };

  interface ValidationErrors {
    [key: string]: boolean | undefined;
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLLIElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    let formattedValue = value;

    if (name === "phone") {
      const cleanedValue = value.replace(/[^\d+]/g, "");
      formattedValue = cleanedValue.replace(/^(?=\d)/, "+");
    }

    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));

    setTouchedFields((prevFields) => ({
      ...prevFields,
      [name]: !!formattedValue,
    }));

    let isValid = true;
    if (formattedValue) {
      switch (name) {
        case "firstname":
        case "lastname":
          isValid = validateName(formattedValue);
          break;
        case "email":
          isValid = validateEmail(formattedValue);
          break;
        case "phone":
          isValid = validatePhoneNumber(formattedValue.slice(1));
          break;
        case "company":
          isValid = validateCompanyName(formattedValue);
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
    };

    if (cv) {
      errors.cvFile = !formData.cvFile;
    } else {
      errors.company = !validateCompanyName(formData.company);
      errors.subject = !formData.subject || formData.subject.trim() === "";
    }

    if (!cv) {
      errors.time = false;
    }

    setValidationErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleFormSubmission = async () => {
    const isFormValid = await validateForm();

    if (isFormValid) {
      setFormMessage("Form is valid. Ready to submit!");

      setTimeout(() => {
        setFormMessage("");
      }, 10000);
    } else {
      setFormMessage("Validation failed. Please check your inputs.");
    }
  };

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
          resetForm();
          setCvFileInputKey(cvFileInputKey + 1);

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

  const handleTimeChange = (date: Date | null) => {
    const formattedDate = date ? date.toISOString() : "";
    setFormData({ ...formData, time: date });
    setIsDateSelected(!!date);

    if (formDataRef.current) {
      (formDataRef.current as any).set("time", formattedDate);
    }
  };

  const formDataRef = useRef(formData);
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  const renderInputField = (field: {
    type: string;
    name: string;
    label?: string;
  }) => {
    let isValidField = false;

    const timePickerClassNames = classNames({
      [s.timePicker]: !isDateSelected, // Використовуйте timePicker, якщо дата не вибрана
      [s.timePickerValid]: isDateSelected, // Замініть на timePickerValid, якщо дата вибрана
    });

    if (field.name === "time") {
      isValidField =
        !validationErrors[field.name as keyof typeof validationErrors];
      return (
        <DatePickerInput
          name="time"
          variant="unstyled"
          placeholder="WHEN YOU ARE READY TO START WORKING?"
          value={formData.time}
          onChange={handleTimeChange}
          defaultValue={new Date()}
          error={touchedFields.time && !isValidField}
          className={timePickerClassNames}
        />
      );
    }

    const isTouched = touchedFields[field.name as keyof typeof touchedFields];
    const isValid =
      !validationErrors[field.name as keyof typeof validationErrors];
    const shouldShowValidation = isTouched;

    const fieldValue = formData[field.name as keyof typeof formData];
    const valueToPass = typeof fieldValue === "string" ? fieldValue : "";

    return (
      <InputField
        key={field.name}
        type={field.type}
        name={field.name}
        label={field.label || field.name}
        value={valueToPass}
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
    const textareaClassNames = classNames(s.form__message, s.text, {
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
      key={cvFileInputKey}
      className={classNames({ [s.cv]: cv })}
      type="file"
      name="cvFile"
      label={null}
      value={formData.cvFile ? formData.cvFile.name : ""}
      onChange={handleInputChange}
      isValid={touchedFields.cvFile && !validationErrors.cvFile}
      isInvalid={touchedFields.cvFile && validationErrors.cvFile}
    />
  );

  const renderDropdown = () => {
    const dropdownValue = cv ? formData.vacancy : formData.subject;
    const isTouched = cv ? touchedFields.vacancy : touchedFields.subject;
    const isValid = cv ? !validationErrors.vacancy : !validationErrors.subject;

    const inputClassNames = classNames(s.form__input, s.text, {
      [s.inputValid]: isTouched && isValid,
      [s.inputInvalid]: isTouched && !isValid,
      [s.cv]: cv,
    });

    const handleDropdownClick = (value: string) => {
      setSelectedDropdownValue(value);
      setFormData((prevData) => ({
        ...prevData,
        [cv ? "vacancy" : "subject"]: value,
      }));

      setTouchedFields((prevFields) => ({
        ...prevFields,
        [cv ? "vacancy" : "subject"]: true,
      }));

      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [cv ? "vacancy" : "subject"]: value.trim() === "",
      }));

      setIsDropdownOpen(false);
    };

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
                <span
                  className={classNames(s.arrow, {
                    [s.arrow__open]: isDropdownOpen,
                  })}
                >
                  ⌵
                </span>
              </>
            ) : (
              <>
                {formData.subject || t("topicOfEnquiry")}
                <span
                  className={classNames(s.arrow, {
                    [s.arrow__open]: isDropdownOpen,
                  })}
                >
                  ⌵
                </span>
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
                    className={s.text}
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
                    className={s.text}
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

  const fields = cv ? fieldsCV : fieldsWithoutCV;

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

            <div className={classNames(s.form__test, [cv ? s.cv : ""])}>
              <MainButtonComponent
                text="Get in touch"
                typeButton="MainContactUsButton"
                onClick={handleFormSubmission}
              />

              {formMessage && <p className={s.formMessage}>{formMessage}</p>}
            </div>
          </form>
          <Image className={s.form__picture} src={Picture} alt="Picture" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
