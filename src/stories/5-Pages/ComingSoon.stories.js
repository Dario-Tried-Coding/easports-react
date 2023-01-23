import ComingSoon from "Components/5-Pages/ComingSoon";
import React from "react";
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator";

export default {
  title: "Pages/Coming Soon",
  component: ComingSoon,
  decorators: [ScrollBlockedDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export const template = (args) => <ComingSoon {...args} />;