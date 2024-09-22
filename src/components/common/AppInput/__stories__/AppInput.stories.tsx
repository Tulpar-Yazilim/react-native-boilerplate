import type { Meta, StoryObj } from "@storybook/react";

import AppInput from "../";

const meta = {
  title: "Components/AppInput",
  component: AppInput,
} satisfies Meta<typeof AppInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
