import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import React from "react";

export default {
  title: "Organisms/Wrappers/Cards Wrapper",
  component: WrCards,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 6
    },
    gap: {
      options: ["--gap-cards-1", "--gap-cards-2"],
      control: {type: "select"}
    }
  }
}

const Template = ({numOfChildren, ...args}) => (
  <WrCards {...args}>
    {[...
    // @ts-ignore
    Array(numOfChildren).keys()].map(n => (
      <div style={{width: "100%", height: "50px", backgroundColor: "lightGrey", borderRadius: "5px"}}></div>
    ))}
  </WrCards>
)

export const template = Template.bind({})
template.args = {
  gap: "--gap-cards-1"
}