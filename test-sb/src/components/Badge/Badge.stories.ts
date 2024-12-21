import { Badge } from "./Badge";
import type { Meta, StoryObj } from '@storybook/react';

type BadgeStory = StoryObj<typeof Badge>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      status:{control:'select', options:['Draft','Published','Archived']}
    },
  } satisfies Meta<typeof Badge>;

  export default meta;

  export const Draft: BadgeStory = {
    args:{
        status:'Draft',
        children:"Brouillon"
    }
  };
