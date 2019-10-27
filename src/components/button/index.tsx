import * as React from 'react';
import { addClassName } from '../../helper';
import { NColor, Variant } from '../../types'
import { DotsLoading } from '../loading';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  neatColor?: NColor,
  color?: string,
  variant?: Variant,
  children?: React.ReactNode,
  failedText?: string,
  iconClass?: string,
  iconLeft?: Node | string,
  iconRight?: Node | string,
  loading?: boolean,
  successText?: string,
  textClass?: string,
  fullWidth?: string,
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    neatColor,
    color = 'none',
    variant = 'raised',
    children,
    className,
    failedText,
    iconClass,
    iconLeft,
    iconRight,
    loading,
    successText,
    textClass,
    ...buttonProps
  } = props;

  const buttonClassName: string = addClassName([
    'neat-btn',
    `neat-btn__${variant}`,
    neatColor && `neat-btn__${variant}--${neatColor}`,
    loading && `neat-btn__${variant}--loading`,
    className,
  ]);

  const textClassName: string = addClassName([
    'neat-btn__text',
    loading && 'neat-btn__text--none',
    textClass,
  ])

  const iconClassName: string = addClassName([
    'neat-btn__icon',
    iconLeft && 'neat-btn__icon--left',
    iconRight && 'neat-btn__icon--right',
    iconClass
  ])

  const renderIcon = (icon: React.ReactNode | string): React.ReactNode => {
    if (React.isValidElement(icon)) {
      return <span className={iconClassName}>{iconLeft}</span>
    } else if (typeof icon === 'string') {
      return <img className={iconClassName} src={icon} />
    }
    return;
  }

  console.log(renderIcon(<img src='../../'/>));

  return (
    <button style={{ backgroundColor: color }} className={buttonClassName} {...buttonProps}>
      {iconLeft && renderIcon(iconLeft)}
      {iconRight && renderIcon(iconRight)}
      { loading && <DotsLoading />}
      {/* {successText && <span>{successText}</span>}
      {failedText && <span>{failedText}</span>} */}
      {<span className={textClassName}>{children}</span>}
    </button>
  );
}
