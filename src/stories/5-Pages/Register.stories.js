import React from "react";
import Register from "Components/5-Pages/Register";

export default {
  title: "Pages/Register",
  component: Register,
  parameters: {
    layout: "fullscreen",
  },
}

export const template = (args) => <Register {...args}/>