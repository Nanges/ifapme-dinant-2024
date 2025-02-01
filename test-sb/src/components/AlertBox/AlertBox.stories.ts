import { AlertBox } from "./AlertBox";
import type { Meta, StoryObj } from '@storybook/react';

type AlertBoxStory = StoryObj<typeof AlertBox>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/AlertBox',
    component: AlertBox,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      variant:{control:'select', options:['Info','Success','Error', 'Warning']}
    },
  } satisfies Meta<typeof AlertBox>;

  export default meta;

  export const Info: AlertBoxStory = {
    args:{
        variant:'Info',
        children:"Message",
        title:"Info"
    }
  };

  export const Success: AlertBoxStory = {
    args:{
        variant:'Success',
        children:"Message",
        title:"Success"
    }
  };

  export const Warning: AlertBoxStory = {
    args:{
        variant:'Warning',
        children:"Message",
        title:"Warning"
    }
  };

  export const Error: AlertBoxStory = {
    args:{
        variant:'Error',
        children:"Message",
        title:"Error"
    }
  };
