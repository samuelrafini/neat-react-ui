// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Demo } from './demo';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Demo',
  component: Demo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Demo>> = (args) => <Demo {...args} />;

export const DemoWithHundred = Template.bind({});
export const DemoWithTwoHundred = Template.bind({});
export const EmptyDemo = Template.bind({});


DemoWithHundred.args = {
  propString: 'This awesome!',
  propsNumber: 100,
  /*👇 The args you need here will depend on your component */
};

DemoWithTwoHundred.args = {
  ...DemoWithHundred,
  propsNumber: 200,
}

EmptyDemo.args = {

}