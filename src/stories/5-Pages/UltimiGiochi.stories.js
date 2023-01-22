import React from "react";
import Games from "Components/5-Pages/Games";
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator";

export default {
  title: "Pages/Ultimi Giochi",
  component: Games,
  decorators: [ScrollBlockedDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export const template = (args) => <Games {...args} />;