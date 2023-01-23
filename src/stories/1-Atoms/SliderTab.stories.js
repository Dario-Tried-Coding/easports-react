import React from 'react';
import SliderTab from 'Components/1-Atoms/SliderTab';

export default {
  title: "Atoms/SliderTab",
  component: SliderTab,
  argTypes: {
    onClick: {
      action: "click"
    }
  }
}

const Template = (args) => <div style={{display: "flex", justifyContent: "center"}}>
  <SliderTab {...args}/>
</div>

export const template = Template.bind({});
template.args = {
  title: "Placeholder Title",
  active: true
};
template.argTypes = {
  onClick: {
    control: false
  }
}