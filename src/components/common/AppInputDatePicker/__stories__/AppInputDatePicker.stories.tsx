import type { Meta, StoryObj } from "@storybook/react";

import AppInputDatePicker from "../";

const meta = {
  title: "Components/AppInputDatePicker",
  component: AppInputDatePicker,
} satisfies Meta<typeof AppInputDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
