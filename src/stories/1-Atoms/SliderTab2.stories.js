import React from 'react';
import SliderTab2 from 'Components/1-Atoms/SliderTab2';

export default {
  title: "Atoms/SliderTab2",
  component: SliderTab2,
}

const Template = (args) => <div style={{display: "flex", justifyContent: "center"}}>
  <SliderTab2 {...args}/>
</div>

export const template = Template.bind({});
template.args = {
  isActive: true,
  to: "/",
  text: "default"
};
template.parameters = {
  controls: {
    exclude: ["to"]
  }
}