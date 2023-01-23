import NavbarLink from "Components/1-Atoms/NavbarLink";
import React from "react";

export default {
  title: "Atoms/NavbarLink",
  component: NavbarLink,
  argTypes: {
    to: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    }
  }
};

export const template = (args) => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100, borderRadius: 10, backgroundColor: "var(--clr-light-100)" }}>
    <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconsignin.svg" {...args} />
  </div>
);
template.args = {
  text: "Placeholder Text"
}