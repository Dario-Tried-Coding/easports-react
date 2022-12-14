import Card2 from "Components/2-Molecules/Cards/Card2";
import React from "react";

export default {
  title: "Molecules/Cards/Card2",
  component: Card2,
};

const Template = args => <Card2 {...args} />

export const template = Template.bind({})
template.args = {
  img: "https://via.placeholder.com/766x431",
  from: "company name",
  date: "dd-mm-yyyy",
  title: "Card Title",
  body: "Card body..."
}