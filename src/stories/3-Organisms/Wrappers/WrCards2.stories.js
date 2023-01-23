import React from "react";
import WrCards2 from "Components/3-Organisms/Wrappers/WrCards2";

export default {
  title: "Organisms/Wrappers/Cards Wrapper 2",
  component: WrCards2,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 6
    }
  }
}

const Template = ({numOfChildren, ...args}) => (
  <WrCards2 {...args}>
    {[...
    // @ts-ignore
    Array(numOfChildren).keys()].map(n => (
      <div style={{width: "100%", height: "50px", backgroundColor: "lightGrey", borderRadius: "5px"}}></div>
    ))}
  </WrCards2>
)

export const template = Template.bind({})