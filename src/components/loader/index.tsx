import * as React from 'react';

export const LoaderCircle: React.FC = () => (
  <div className="spinner">
    <div className="dot1"></div>
    <div className="dot2"></div>
  </div>
)

export const LoaderRectangle: React.FC = () => (
  <div className="loader-rec">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
)
