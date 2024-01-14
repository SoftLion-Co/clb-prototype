"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import s from "@/app/sections/main_page/ContactUsSection.module.scss";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface InputFieldProps {
  type: string;
  name: string;
  label: string | null;
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  cv?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
}

const InputField: React.FC<InputFieldProps & { cv?: boolean }> = ({
  type,
  name,
  label,
  onChange,
  inputRef,
  className,
  cv,
  isValid,
  isInvalid,
}) => {
  const t = useTranslations("homePage.contactUs");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "file" && e.target.files) {
      setFileName(e.target.files[0].name);
    }
    onChange(e);
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const inputClassNames = classNames(
    s.form__input,
    {
      [s.inputValid]: isValid,
      [s.inputInvalid]: isInvalid,
      [s.cv]: cv,
    },
    className
  );

  return (
    <div className={classNames(s.form__group, className, { [s.cv]: cv })}>
      {type === "file" ? (
        <div className={s.form__attach}>
          <input
            ref={fileInputRef}
            type="file"
            name={name}
            id={name}
            className={classNames(s.form__inputfile, inputClassNames)}
            onChange={handleChange}
          />
          <label htmlFor={name} className={s.form__label}>
            {label}
          </label>
          <button
            type="button"
            className={s.form__fileButton}
            onClick={handleFileButtonClick}
          >
            {t("chooseFile")}
          </button>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={t(label)}
          className={classNames(s.form__input, inputClassNames, {
            [s.inputValid]: isValid,
            [s.inputInvalid]: isInvalid,
          })}
          onChange={onChange}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default InputField;
