import type { Decorator } from "@storybook/react";
import "app/styles/index.scss";

export const StyleDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || "light";

  return (
    <div className={`app ${theme}`}>
      <Story {...context} />
    </div>
  );
};
