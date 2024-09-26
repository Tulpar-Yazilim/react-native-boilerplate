import type {Meta, StoryObj} from '@storybook/react';

import AppFormCheckbox from '..';

const meta = {
  title: 'Components/AppFormCheckbox',
  component: AppFormCheckbox,
} satisfies Meta<typeof AppFormCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
