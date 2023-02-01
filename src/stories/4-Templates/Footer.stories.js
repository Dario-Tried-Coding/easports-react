import React from "react";
import Footer from "Components/4-Templates/Footer";

export default {
  title: "Templates/Footer",
  component: Footer,
};

export const template = (args) => (
  <div>
    <div style={{height: "45vw", backgroundColor: "lightgray", borderRadius: 10, marginBottom: "1vw"}}></div>
    <Footer {...args} />
  </div>
);
