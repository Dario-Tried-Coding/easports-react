import React from 'react';
import Slider1 from 'Components/2-Molecules/Sliders/Slider1';

export default {
  title: "Molecules/Sliders/Slider1",
  component: Slider1
}

export const template = (args) => <Slider1 {...args} />
template.args = {
  data: [
    {
      setTitle: "Set 1",
      cards: [{}, {}, {}, {}, {}, {}],
    },
    {
      setTitle: "Set 2",
      cards: [{}, {}, {}, {}, {}, {}],
    },
    {
      setTitle: "Set 3",
      cards: [{}, {}, {}, {}, {}, {}],
    },
    {
      setTitle: "Set 4",
      cards: [{}, {}, {}, {}, {}, {}],
    },
    {
      setTitle: "Set 5",
      cards: [{}, {}, {}, {}, {}, {}],
    },
    {
      setTitle: "Set 6",
      cards: [{}, {}, {}, {}, {}, {}],
    },
  ],
  activeSet: {
    setTitle: "Set 1",
    cards: [{}, {}, {}, {}, {}, {}],
  },
  activate: () => console.log("click")
}
template.parameters = {
  controls: {
    exclude: ["activate"]
  }
}