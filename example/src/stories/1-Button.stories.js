import React from 'react';
import { Button } from 'neat-react-ui';
import { withKnobs, text, boolean, select, color } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, jsxDecorator]
};

export const button = () => (
  <Button
    classname
    neatColor={select("Neat Color", neatColors, "primary")}
    color={color('Color', '')}
    variant={select("Variant", variant, "raised")}
    shape={select("Shape", shape, "rounded")}
    fontSize={select("Font Size", fontSize, "medium")}
    loading={boolean('Loading', false)}
    disabled={boolean('disabled', false)}
  >
    {text("Text as child", "Submit")}
  </Button>
);

const neatColors = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  danger: "danger",
  info: "info",
  light: "light",
  dark: "dark",
  white: "white",
  none: undefined,
};

const variant = {
  raised: "raised",
  flat: "flat",
  outlined: "outlined",
}

const shape = {
  rounded: "rounded",
  fullRounded: "full-rounded",
  rectangle: "rectangle",
}

const fontSize = {
  xxSmall: "xx-small",
  xSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  xLarge: "x-large",
  xxLarge: "xx-large",
}

