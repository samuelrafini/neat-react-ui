import * as React from "react";
import { addClassName } from "../../helper";
import { Brand } from "../../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  brand?: Brand;
  label?: string;
  characterCounter: string;
}

export const Input: React.FC<Props> = props => {
  const { className, brand, label,characterCounter, ...inputProps } = props;

  const inputClassName: string = addClassName([
    "neat-input",
    `neat-input--${brand}`,
    className
  ]);
  return (
    <div>
      <label>
      {label}
      <input className={inputClassName} {...inputProps} type="text" />
      </label>
      <span>{characterCounter}</span>
    </div>

  );
};
