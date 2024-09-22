import type { Meta, StoryObj } from "@storybook/react";

import AppCheckbox from "../";

const meta = {
  title: "Components/AppCheckbox",
  component: AppCheckbox,
} satisfies Meta<typeof AppCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
