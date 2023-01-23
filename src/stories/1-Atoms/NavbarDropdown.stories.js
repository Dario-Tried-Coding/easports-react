import NavbarDropdown from "Components/1-Atoms/NavbarDropdown";
import React from "react";

const simpleMockData = {
  btn: "Btn text",
  singleColumn: true,
  links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]]
}

export default {
  title: "Atoms/NavbarDropdown",
  component: NavbarDropdown,
  argTypes: {
    data: {
      table: {
        disable: true
      }
    }
  }
};

export const Complex = (args) => (
  <div style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", borderRadius: 10, height: 50, paddingLeft: 40, backgroundColor: "var(--clr-light-100)" }}>
    <NavbarDropdown {...args} />
  </div>
);

export const Simple = (args) => (
  <div style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", borderRadius: 10, height: 50, paddingLeft: 40, backgroundColor: "var(--clr-light-100)" }}>
    <NavbarDropdown data={simpleMockData} {...args} />
  </div>
);