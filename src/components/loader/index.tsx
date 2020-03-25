import * as React from 'react';
import { addClassName } from '../../helper';

interface LoaderProp {
  color?: string,
  className?: string
}

export const LoaderCircle: React.FC<LoaderProp> = ({color}) => (
  <div className="spinner">
    <div style={{backgroundColor: color}} className="dot1"></div>
    <div style={{backgroundColor: color}} className="dot2"></div>
  </div>
)

export const LoaderRectangle: React.FC<LoaderProp> = ({color, className}) => {

  const loaderClassName = (initClass: string): string => {
    return addClassName([
      initClass,
      className
    ])
  }

  console.log(color)
  return (
  <div className="loader-rec">
    <div style={{backgroundColor: color }} className={loaderClassName('bounce1')}></div>
    <div style={{backgroundColor: color }} className={loaderClassName('bounce2')}></div>
    <div style={{backgroundColor: color }} className={loaderClassName('bounce3')}></div>
  </div>
)}
