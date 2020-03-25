import * as React from "react";
import { addClassName } from "../../helper";
import { NColor } from "../../types";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  message?: string;
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  stateColor?: inputStateColor;
  ref?: React.Ref<HTMLInputElement>;
}

interface inputStateColor {
  default?: NColor | string;
  focused?: NColor | string;
  entered?: NColor | string;
  error?: NColor | string
}


const Input: React.FC<IInputProps> = (props => {
  const { label, error, message, className, iconLeft, iconRight, stateColor, ref, ...inputProps } = props;

  const inputClassName: string = addClassName([
    'neat-input',
    className,
  ]);

  

  return (
    <div>
      <label htmlFor={inputProps.name}>{label}</label>
      <input {...inputProps} id={inputProps.name} ref={ref} className={inputClassName} />
    </div>
  );

});

export default React.forwardRef(Input);