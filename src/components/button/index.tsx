import * as React from 'react';
import { addClassName } from '../../helper';
import { NColor, Variant, Shape, Sizes } from '../../types';
import { LoaderRectangle } from '../loader';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  neatColor?: NColor,
  color?: string,
  fontSize: Sizes,
  variant?: Variant,
  shape?: Shape,
  children?: React.ReactNode,
  iconClass?: string,
  iconLeft?: React.ReactNode | string,
  iconRight?: React.ReactNode | string,
  loading?: boolean,
  textClass?: string,
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    neatColor,
    color,
    variant = 'raised',
    shape = 'rectangle',
    fontSize = 'medium',
    children,
    className,
    iconClass,
    iconLeft,
    iconRight,
    loading,
    textClass,
    ...buttonProps
  } = props;

  const buttonClassName: string = addClassName([
    'neat-btn',
    `neat-btn-${variant}`,
    neatColor && `neat-btn-${variant}--${neatColor}`,
    loading && `neat-btn-${variant}--loading`,
    `neat-btn-${shape}`,
    className,
  ]);

  const textClassName: string = addClassName([
    'neat-btn__text',
    loading && 'neat-btn__text--none',
    `n-size-${fontSize}`,
    textClass,
  ]);

  const iconClassName: string = addClassName([
    'neat-btn__icon',
    iconLeft && 'neat-btn__icon--left',
    iconRight && 'neat-btn__icon--right',
    iconClass
  ]);

  const loaderClassName: string = addClassName([
    variant === 'outlined' && !color ? `n-bg-${neatColor}` : 'n-bg-white',
  ]);

  const handleInlineStyling = (): React.CSSProperties => {
    let backgroundColor;
    let borderColor;
    let color;
  
    if(props.color) {
      if(variant === 'outlined' && !props.disabled) {
        color = props.color;
        borderColor = props.color;
      } else if (props.color && !props.disabled){
        backgroundColor = props.color;
      };
    };

    const style = {
      color,
      borderColor,
      backgroundColor,
    };

    return style;
  };

  const renderIcon = (icon: React.ReactNode | string): React.ReactNode => {
    if (React.isValidElement(icon)) {
      return <span className={iconClassName}>{icon}</span>
    } else if (typeof icon === 'string') {
      return <img className={iconClassName} src={icon} />
    };
  
    return;
  };

  return (
    <button
      style={handleInlineStyling()}
      className={buttonClassName} {...buttonProps}
    >
      {iconLeft && renderIcon(iconLeft)}
      {iconRight && renderIcon(iconRight)}
      {loading && <LoaderRectangle className={loaderClassName} color={variant === 'outlined' ? color: ''}/>}
      {<span className={textClassName}>
        {children}
      </span>}
    </button>
  );
};

export default Button;
