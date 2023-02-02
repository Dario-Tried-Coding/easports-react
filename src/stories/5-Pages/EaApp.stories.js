import React from "react";
import EaApp from "Components/5-Pages/EaApp";
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator";

export default {
  title: "Pages/EaApp",
  component: EaApp,
  decorators: [ScrollBlockedDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export const template = (args) => <EaApp {...args} />;