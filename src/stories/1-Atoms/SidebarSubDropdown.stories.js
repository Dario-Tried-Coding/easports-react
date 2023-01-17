import SidebarSubDropdown from "Components/1-Atoms/SidebarSubDropdown";
import React from "react";

export default {
  title: "Atoms/SidebarSubDropdown",
  component: SidebarSubDropdown,
  argTypes: {
    data: {
      table: {
        disable: true
      }
    }
  }
};

export const template = (args) => (
  <div style={{ height: "80vh", width: 300, borderRadius: 10, backgroundColor: "var(--clr-light-100)", paddingInline: "2%", paddingBlock: 10 }}>
    <SidebarSubDropdown {...args} />
    <SidebarSubDropdown {...args} />
  </div>
);