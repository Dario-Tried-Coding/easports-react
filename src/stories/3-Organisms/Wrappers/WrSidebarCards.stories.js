import WrSidebarCards from "Components/3-Organisms/Wrappers/WrSidebarCards";
import React from "react";

export default {
  title: "Organisms/Wrappers/Sidebar Cards Wrapper",
  component: WrSidebarCards,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 6
    }
  }
}

const Template = ({numOfChildren, ...args}) => (
  <div style={{maxWidth: 300, marginInline: "auto"}}>
    <WrSidebarCards {...args}>
      {[...
      // @ts-ignore
      Array(numOfChildren).keys()].map(n => (
        <div style={{width: "100%", aspectRatio: "1 / 1", backgroundColor: "lightGrey", borderRadius: "5px"}}></div>
      ))}
    </WrSidebarCards>
  </div>
)

export const template = Template.bind({})