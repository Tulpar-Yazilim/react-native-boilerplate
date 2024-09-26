import type {Meta, StoryObj} from '@storybook/react';

import AppFormInput from '..';

const meta = {
  title: 'Components/AppFormInput',
  component: AppFormInput,
} satisfies Meta<typeof AppFormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
