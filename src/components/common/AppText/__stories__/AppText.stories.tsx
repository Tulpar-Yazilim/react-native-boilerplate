import type {Meta, StoryObj} from '@storybook/react';

import {AppText} from '../..';

const meta = {
  title: 'Components/AppText',
  component: AppText,
} satisfies Meta<typeof AppText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Test',
  },
  argTypes: {
    children: {
      description: 'Çevrilmesini istediğiniz yazıyı children olarak yazınız.',
    },
    langQuery: {
      description: 'Yazı ile birlikte query olarak gitmesini isetidiğiniz verileri yazınız.',
    },
  },
};
