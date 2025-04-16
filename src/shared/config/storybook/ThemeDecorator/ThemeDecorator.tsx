import type { Decorator } from "@storybook/react";

export const ThemeDecorator =
  (theme: "light" | "dark"): Decorator =>
  (Story, context) => {
    return (
      <div className={`app ${theme}`}>
        <Story {...context} />
      </div>
    );
  };
