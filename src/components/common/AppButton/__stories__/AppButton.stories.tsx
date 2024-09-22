import type {Meta, StoryObj} from '@storybook/react';

import AppButton from '..';

const meta = {
  title: 'Components/AppButton',
  component: AppButton,
} satisfies Meta<typeof AppButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
