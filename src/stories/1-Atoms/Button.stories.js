import {Button} from "../../Components/1-Atoms/Button";
import React from "react";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = args => <Button {...args} />

export const template = Template.bind({})
template.args = {
 content :"prova"
}