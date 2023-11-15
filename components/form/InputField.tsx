import React from "react";
import s from "@/app/sections/main_page/ContactUsSection.module.scss"

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
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

  return (
    <div className={s.form__group}>
      <label className={s.form__label}>{label}</label>
      {isFileInput ? (
        <>
          <input
            type={type}
            name={name}
            id="file"
            className={s.inputfile}
            onChange={onChange}
          />
          <label htmlFor="file">
            <span>{value || "Choose a file"}</span>
          </label>
        </>
      ) : (
        <input
          type={type}
          className={s.form__input}
          name={name}
          value={value || ""}
          onChange={onChange}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default InputField;
