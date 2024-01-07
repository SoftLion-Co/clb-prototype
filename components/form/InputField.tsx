import React from "react";
import s from "@/app/sections/main_page/ContactUsSection.module.scss";
import { useTranslations } from "next-intl";

interface InputFieldProps {
  type: string;
  name: string;
  label: string | null;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  label,
  value,
  onChange,
  inputRef,
}) => {
  const isFileInput = type === "file";
  const t = useTranslations("homePage.contactUs");

  return (
    <div className={s.form__group}>
      {isFileInput ? (
        <>
          <label className={s.form__label} htmlFor={name}>
            {t(label)}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className={s.inputfile}
            onChange={onChange}
          />
        </>
      ) : (
        <input
          type={type}
          className={s.form__input}
          name={name}
          id={name}
          placeholder={label ? t(label) : ""}
          value={value || ""}
          onChange={onChange}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default InputField;
