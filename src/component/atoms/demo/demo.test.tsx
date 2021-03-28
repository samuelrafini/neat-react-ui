import React from 'react';
import { Demo, DemoProps } from './demo';
import { render, fireEvent, screen } from '@testing-library/react';

//https://reactjs.org/docs/testing-recipes.html

describe('Demo runs without crashing', () => {
  const demoProps: DemoProps = {
    propString: 'this works',
    propsNumber: 10,
    size: 'sm',
  };

  it('should not crash', () => {
    const { getByTestId } = render(<Demo {...demoProps} />);
    expect(getByTestId('demo'));
  });
});
