import type { Meta, StoryObj } from "@storybook/react";

import AppDynamicForm from "../";

const meta = {
  title: "Components/AppDynamicForm",
  component: AppDynamicForm,
} satisfies Meta<typeof AppDynamicForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  argTypes: {},
};
