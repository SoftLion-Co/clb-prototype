import React, { FC, ChangeEvent, useRef, useState } from "react";
import s from "@/app/sections/main_page/ContactUsSection.module.scss";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface InputFieldProps {
  type: string;
  name: string;
  label: string | null;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  cv?: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  isFileValid?: boolean;
}

const InputField: FC<InputFieldProps & { isCV?: boolean }> = ({
  type,
  name,
  label,
  value,
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
  const [fileTypeUnsupportedError, setFileTypeUnsupportedError] =
    useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "file" && e.target.files) {
      const file = e.target.files[0];
      if (file.size > 5242880) {
        setFileSizeError(true);
        setFileName("");
        setFileTypeUnsupportedError(false);
      } else {
        setFileSizeError(false);
        setFileName(file.name);

        const allowedFileTypes = ["pdf", "svg", "jpg", "png"];
        const fileType = file.name.split(".").pop()?.toLowerCase();
        if (fileType && !allowedFileTypes.includes(fileType)) {
          setFileTypeUnsupportedError(true);
        } else {
          setFileTypeUnsupportedError(false);
        }
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

  const fileMessageClassNames = classNames(s.form__fileMessage, {
    [s.inputValid]: isValid && isFileValid,
    [s.inputInvalid]: isInvalid || fileSizeError || fileTypeUnsupportedError,
  });

  const attachClassNames = classNames(s.form__attach, {
    [s.inputValid]: isValid,
    [s.inputInvalid]: isInvalid || fileSizeError,
  });

  return (
    <div className={classNames(s.form__group, className, { [s.cv]: cv })}>
      {type === "file" ? (
        <div
          className={classNames(attachClassNames, inputClassNames)}
          style={{ width: "100%" }}
        >
          <input
            ref={fileInputRef}
            type="file"
            name={name}
            id={name}
            accept=".pdf,.svg,.jpg,.png"
            className={classNames(s.form__inputfile, s.text, { [s.cv]: cv })}
            onChange={handleChange}
          />

          <label htmlFor={name} className={s.form__label}>
            {label}
          </label>

          <div className={fileMessageClassNames}>
            <button
              type="button"
              className={classNames(s.form__fileButton, s.text, {
                [s.inputValid]: isValid && isFileValid,
                [s.inputInvalid]:
                  isInvalid || fileSizeError || fileTypeUnsupportedError,
              })}
              onClick={handleFileButtonClick}
            >
              {t("chooseFile")}
            </button>
            <div>
              {fileSizeError && (
                <span className={s.text}>{t("selectingFile")}</span>
              )}
              {fileTypeUnsupportedError && (
                <span className={s.text}>{t("unsupportedFileType")}</span>
                //це повідомлення не знадобиться, але можливо якщо захочеми, додамо
              )}
              {fileName && (
                <span className={s.text}>
                  {t("fileSize")} {fileName}
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={t(label)}
          value={value || ""}
          className={classNames(s.form__input, s.text, inputClassNames)}
          onChange={onChange}
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default InputField;
