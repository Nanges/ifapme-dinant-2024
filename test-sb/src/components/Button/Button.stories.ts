import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

type ButtonStory = StoryObj<typeof Button>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      variant:{control:'select', options:['Primary','Secondary']}
    },
  } satisfies Meta<typeof Button>;

export default meta;


export const Primary: ButtonStory = {
    args:{
        variant:'Primary',
        children:"My button"
    }
}

export const Secondary: ButtonStory = {
    args:{
        variant:'Secondary',
        children:"My button"
    }
}
