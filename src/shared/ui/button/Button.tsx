import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  newClass?: string;
  onlick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, newClass = "", onlick }) => {
  return (
    <button className={`${scss.button} ${newClass}`} onClick={onlick}>
      {children}
    </button>
  );
};

export default Button;
