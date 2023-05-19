import { FC } from "react";
// Helpers
import { InputTypes } from "../../../helpers/constants";

type InputProps = {
  id: string;
  name: string;
  type: string;
  className?: string;
  checked?: boolean;
  placeholder?: string;
  formik?: any;
  hasError?: boolean;
  errorMessage?: string;
  handleChange?: () => void;
};

const Input: FC<InputProps> = ({
  id,
  name,
  className = "",
  type,
  checked = false,
  placeholder = "",
  formik = {},
  hasError = false,
  errorMessage = "",
  handleChange = () => {},
}) => {
  return (
    <>
      {type === InputTypes.CHECKBOX ? (
        <input
          id={id}
          name={name}
          className={className}
          type={type}
          checked={checked}
          onChange={handleChange}
        />
      ) : type === InputTypes.TEXTAREA ? (
        <>
          <textarea
            name={name}
            id={id}
            className={`${className} ${hasError ? "error__border error__color" : ""}`}
            onBlur={formik?.handleBlur}
            onChange={formik?.handleChange}
            value={formik?.values?.[name]}
            placeholder={placeholder}
          ></textarea>
          {hasError ? <span className={"mt-1 error__color fs__14"}>{errorMessage}</span> : null}
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            id={id}
            className={`${className} ${hasError ? "error__border error__color" : ""}`}
            onBlur={formik?.handleBlur}
            onChange={formik?.handleChange}
            value={formik?.values?.[name]}
            placeholder={placeholder}
          />
          {hasError ? <span className={"mt-1 error__color fs__14"}>{errorMessage}</span> : null}
        </>
      )}
    </>
  );
};

export default Input;
