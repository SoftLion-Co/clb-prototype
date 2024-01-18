import React, { FC } from "react";
import s from "@/app/sections/main_page/ContactUsSection.module.scss";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface InputFieldProps {
  type: string;
  name: string;
  label: string | null;
  value: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  cv?: boolean;
}

const InputField: FC<InputFieldProps & { cv?: boolean }> = ({
  type,
  name,
  label,
  value,
  onChange,
  inputRef,
  className,
  cv,
}) => {
  const isFileInput = type === "file";
  const t = useTranslations("homePage.contactUs");

  return (
    <div className={classNames(s.form__group, className, { [s.cv]: cv })}>
      {isFileInput ? (
        <>
          <label className={s.form__label} htmlFor={name}>
            {t(label)}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className={classNames(s.form__inputfile, { [s.cv]: cv })}
            onChange={onChange}
          />
        </>
      ) : (
        <input
          type={type}
          className={classNames(s.form__input, { [s.cv]: cv })}
          name={name}
          id={name}
          placeholder={label ? t(label) : cv ? t("cvPlaceholder") : ""}
          value={value || ""}
          onChange={onChange}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default InputField;
