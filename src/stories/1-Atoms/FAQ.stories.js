import React from "react";
import FAQ from "Components/1-Atoms/FAQ";

export default {
  title: "Atoms/FAQ",
  component: FAQ,
};

export const template = (args) => (
  <div style={{maxWidth: 800, marginInline: "auto", paddingInline: "5vw"}}>
    <FAQ {...args} />
  </div>
);
template.args = {
  title: "Default question",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt neque sapiente impedit reiciendis cumque!"
}