import { FC } from "react";

type ButtonProps = {
  children: string;
  className: string;
  isSubmit?: boolean;
};

const Button: FC<ButtonProps> = ({ children, className, isSubmit = false }) => {
  return <button type={isSubmit ? "submit" : "button"} className={className}>{children}</button>;
};

export default Button;
