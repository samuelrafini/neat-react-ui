import React from 'react';

export interface DemoProps {
  propString: string;
  propsNumber: number;
  size: 'sm' | 'md' | 'ld';
}

export const Demo: React.FC<DemoProps> = ({
  propString,
  propsNumber,
  size,
}) => {
  return (
    <div data-testid="demo">
      <h1>{propString}</h1>
      <p>my prop number{propsNumber}</p>
      <p>size is: {size}</p>
    </div>
  );
};
