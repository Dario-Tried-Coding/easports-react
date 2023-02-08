import React from "react";
import Login from "Components/5-Pages/Login";

export default {
  title: "Pages/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
}

export const template = (args) => <Login {...args}/>