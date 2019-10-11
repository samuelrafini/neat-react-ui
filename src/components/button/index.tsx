import * as React from 'react';
import { addClassName } from '../../helper';
import { Brand } from '../../types'

interface inputProp extends React.InputHTMLAttributes<HTMLInputElement>{

}

interface IbuttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: Brand,
  children?: React.ReactNode, 
  failedText?: string,
  iconClass?: string,
  iconLeft?: boolean,
  iconRight?: boolean,
  loading?: boolean,
  successText?: string,
  textClass?: string,
  textLabel: string,
}

export const Button: React.FC<IbuttonProps> = (props) => {
  const {
    brand = 'primary',
    children,
    className,
    failedText,
    iconClass,
    iconLeft,
    iconRight,
    loading = false,
    successText,
    textClass,
    textLabel,
    ...buttonProps
  } = props;

  const buttonClassName: string = addClassName([
    'neat-btn',
    `neat-btn--${brand}`,
    className,
  ]);

  const textClassName: string = addClassName([
    'neat-btn__text',
    textClass,
  ])

  return (
    <button className={buttonClassName} {...buttonProps}>
      {(children && iconLeft) && <div>{children[0]}</div>}
      {successText && <p>{successText}</p>}
      {failedText && <p>{failedText}</p>}
      <p className={textClassName}>{textLabel}</p>
      {(children && iconRight) && <div>{children[0]}</div>}
    </button>
  )
}
