import type { Meta, StoryObj } from "@storybook/react";

import AppDatePicker from "../";

const meta = {
  title: "Components/AppDatePicker",
  component: AppDatePicker,
} satisfies Meta<typeof AppDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
