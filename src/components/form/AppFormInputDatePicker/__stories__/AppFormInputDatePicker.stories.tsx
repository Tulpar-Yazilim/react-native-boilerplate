import type {Meta, StoryObj} from '@storybook/react';

import AppFormInputDatePicker from '..';

const meta = {
  title: 'Components/AppFormInputDatePicker',
  component: AppFormInputDatePicker,
} satisfies Meta<typeof AppFormInputDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
