import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { SideBar } from "./SideBar";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},

  args: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
