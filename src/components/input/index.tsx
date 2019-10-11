import * as React from "react";
import { addClassName } from "../../helper";
import { Brand } from "../../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: boolean;
  iconRight?: boolean;
  brand?: Brand;
}



export const Input: React.FC<Props> = props => {
  const { iconLeft, iconRight, className, brand, ...inputProps} = props;

  const inputClassName: string = addClassName([
    'neat-input',
    `neat-input--${brand}`,
    className,
  ]);
  return <input className={inputClassName} {...inputProps}/>;
};
