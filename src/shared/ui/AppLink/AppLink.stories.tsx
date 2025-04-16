import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  decorators: [RouterDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
    children: "Link",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator("dark")],
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator("dark")],
};
