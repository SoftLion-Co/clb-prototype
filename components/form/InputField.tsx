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
  isFileValid?: boolean;
}

const InputField: React.FC<InputFieldProps & { isCV?: boolean }> = ({
  type,
  name,
  label,
  onChange,
  inputRef,
  className,
  cv,
  isValid,
  isInvalid,
  isFileValid,
}) => {
  const t = useTranslations("homePage.contactUs");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [fileSizeError, setFileSizeError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "file" && e.target.files) {
      const file = e.target.files[0];
      if (file.size > 5242880) {
        setFileSizeError(true);
        setFileName("");
      } else {
        setFileSizeError(false);
        setFileName(file.name);
      }
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
      [s.inputValid]: (isValid && !fileSizeError) || (isValid && !isInvalid),
      [s.inputInvalid]: isInvalid || fileSizeError,
      [s.cv]: cv,
    },
    className
  );

  return (
    <div className={classNames(s.form__group, className, { [s.cv]: cv })}>
      {type === "file" ? (
        <div className={s.form__attach} style={{ width: "100%" }}>
          <input
            ref={fileInputRef}
            type="file"
            name={name}
            id={name}
            className={classNames(s.form__inputfile, {
              [s.inputValid]: isValid && isFileValid, 
              [s.inputInvalid]: isInvalid || fileSizeError,
            })}
            onChange={handleChange}
          />

          <label htmlFor={name} className={s.form__label}>
            {label}
          </label>

          <div className={s.form__fileMessage}>
            <button
              type="button"
              className={classNames(s.form__fileButton, {
                [s.inputValid]:
                  (isValid && !fileSizeError) || (isValid && fileSizeError),
                [s.inputInvalid]: isInvalid || fileSizeError,
              })}
              onClick={handleFileButtonClick}
            >
              {t("chooseFile")}
            </button>
            <div>
              {fileSizeError && (
                <span
                  className={classNames(s.errorText, {
                    [s.inputInvalid]: fileSizeError,
                  })}
                >
                  Виберіть файл до 5МБ
                </span>
              )}
              {fileName && <span className={s.fileName}>Файл: {fileName}</span>}
            </div>
          </div>
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
