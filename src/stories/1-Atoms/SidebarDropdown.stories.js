import SidebarDropdown from "Components/1-Atoms/SidebarDropdown";
import React from "react";

const simpleMockData = {
  btn: "Button text",
  singleColumn: true,
  links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"], ["Link 6", "/"], ["Link 7", "/"]]
}

export default {
  title: "Atoms/SidebarDropdown",
  component: SidebarDropdown,
  argTypes: {
    data: {
      table: {
        disable: true
      }
    }
  }
};

export const complex = (args) => (
  <div style={{ height: "80vh", width: 300, borderRadius: 10, backgroundColor: "var(--clr-light-100)", paddingInline: "2%", paddingBlock: 10 }}>
    <SidebarDropdown {...args} />
  </div>
);

export const simple = (args) => (
  <div style={{ height: "80vh", width: 300, borderRadius: 10, backgroundColor: "var(--clr-light-100)", paddingInline: "2%", paddingBlock: 10 }}>
    <SidebarDropdown data={simpleMockData} {...args} />
  </div>
);