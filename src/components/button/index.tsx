import * as React from 'react';
import { addClassName } from '../../helper';
import { NColor } from '../../types'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  NColor?: NColor,
  color?: string
  children?: React.ReactNode,
  failedText?: string,
  iconClass?: string,
  iconLeft?: boolean,
  iconRight?: boolean,
  loading?: boolean,
  successText?: string,
  textClass?: string,
  textLabel: string,
  fullWidth?: string,
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    NColor = 'secondary',
    color = 'none',
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
    `n-bg-${NColor}`,
    className,
  ]);

  const textClassName: string = addClassName([
    'neat-btn__text',
    textClass,
  ])

  return (
    <button style={{backgroundColor: color}} className={buttonClassName} {...buttonProps}>
      {(children && iconLeft) && <div>{children[0]}</div>}
      {successText && <p>{successText}</p>}
      {failedText && <p>{failedText}</p>}
      <p className={textClassName}>{textLabel}</p>
      {(children && iconRight) && <div>{children[0]}</div>}
    </button>
  )
}
