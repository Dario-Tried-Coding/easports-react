import React from "react";
import Form from "Components/5-Pages/Form";
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator";

export default {
  title: "Pages/Form",
  component: Form,
  decorators: [ScrollBlockedDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export const template = (args) => <Form {...args} />;