import * as React from "react";
import { addClassName } from "../../helper";
import { NColor } from "../../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: boolean;
  iconRight?: boolean;
  NColor?: NColor;
}



export const Input: React.FC<Props> = props => {
  const { iconLeft, iconRight, className, NColor, ...inputProps} = props;

  const inputClassName: string = addClassName([
    'neat-input',
    `neat-input--${NColor}`,
    className,
  ]);
  return <input className={inputClassName} {...inputProps}/>;
};
