import React from "react";
import Account from "Components/5-Pages/Account";
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator";

export default {
  title: "Pages/Account",
  component: Account,
  decorators: [ScrollBlockedDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export const template = (args) => <Account {...args} />;