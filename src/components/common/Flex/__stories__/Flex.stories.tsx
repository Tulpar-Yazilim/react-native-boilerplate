import React from 'react';

import type {ComponentMeta, ComponentStory} from '@storybook/react';

import {Flex} from '..';

const meta: ComponentMeta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: "Bu bir flex'dir.",
      },
    },
  },
  argTypes: {
    flex: {
      control: 'number',
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    gap: {
      control: 'number',
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  flex: 1,
  gap: 10,
  direction: 'row',
};
