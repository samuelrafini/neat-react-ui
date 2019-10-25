import * as React from "react";
import { addClassName } from "../../helper";
import { Brand } from "../../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  brand?: Brand;
  label?: string;
  characterCounter: string;
  iconRight: boolean;
}

export const Input: React.FC<Props> = props => {
  const { iconRight, className, brand, label,characterCounter, children, ...inputProps } = props;

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
        {(children &&iconRight) && <div>{children[0]}</div>}
      </label>
      <span>{characterCounter}</span>
    </div>

  );
};
