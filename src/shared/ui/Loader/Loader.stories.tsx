import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { Loader } from "./Loader";

const meta = {
  title: "shared/Loader",
  component: Loader,
  decorators: [RouterDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
  args: {},
  decorators: [ThemeDecorator("light")],
};

export const dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
};
