import * as React from 'react';
import { Brand } from '../../types';
import { addClassName } from '../../helper';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textLabel: string,
  iconLeft?: boolean,
  iconRight?: boolean,
  loading?: boolean,
  successText?: string,
  failedText?: string,
  children?: React.ReactNode, 
  brand?: Brand,
  iconClass?: string,
  textClass?: string,
}

export const Button: React.FC<Props> = (props) => {
  const {
    className,
    iconClass,
    textClass,
    textLabel,
    iconLeft,
    iconRight,
    loading,
    successText,
    failedText,
    children,
    brand,
    ...buttonProps
  } = props;

  const buttonClassName: string = addClassName([
    'btn',
    brand && `btn--${brand}`,
    className,
  ])

  return (
    <button className={buttonClassName} {...buttonProps}>
      {(children && iconLeft) && <div>{children[0]}</div>}
      {successText && <p>{successText}</p>}
      {failedText && <p>{failedText}</p>}
      <p>{textLabel}</p>
      {(children && iconRight) && <div>{children[0]}</div>}
    </button>
  )
}
