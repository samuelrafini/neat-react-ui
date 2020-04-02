import * as React from "react";
import { addClassName } from "../../helper";
import { Sizes, Shape } from "../../types";
import './input.scss';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName: string;
  containerClassName: string;
  labelFontSize: Sizes;
  inputFontSize: Sizes;
  messageFontSize: Sizes;
  fluid: boolean;
  shape?: Shape,
  error?: boolean;
  message?: string;
  messageClassName?: string;
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref: React.RefObject<HTMLInputElement>) => {
  const {
    label,
    labelClassName,
    labelFontSize = 'large',
    inputFontSize = 'small',
    messageFontSize ='x-small',
    shape = 'rounded',
    fluid,
    error,
    message,
    messageClassName,
    className,
    containerClassName,
    iconLeft,
    iconRight,
    ...inputProps
  } = props;

  const [inputTouched, setInputTouched] = React.useState(false)
  const [inputMessage, setInputMessage] = React.useState('')
  
  React.useEffect(() => {
    if(!inputTouched) {
      ref.current && ref.current.value.length > 0 && setInputTouched(true)
    }

    if(inputTouched && ref.current) {
      setInputMessage(ref.current.validationMessage)
    }
  })

  const inputContainerClassName: string = addClassName([
    'input-container',
    fluid && 'n-full',
  ]);

  const inputClassName: string = addClassName([
    'neat-input',
    inputTouched && 'neat-input--touched',
    `n-size-${inputFontSize}`,
    `n-shape-${shape}`,
    className,
  ]);

  const inputLabelClassName: string = addClassName([
    'neat-input__label',
    `n-size-${labelFontSize}`,
    labelClassName,
  ]);

  const inputMessageClassName: string = addClassName([
    'neat-input__message',
    `n-size-${messageFontSize}`,
    messageClassName,
  ])

  return (
    <div className={inputContainerClassName}>
      <label htmlFor={inputProps.name} className={inputLabelClassName}>{label}</label>
      <input {...inputProps} id={inputProps.name} ref={ref} className={inputClassName} />
      <p className={inputMessageClassName}>{inputMessage}</p>
    </div>
  );
});

export default Input;
