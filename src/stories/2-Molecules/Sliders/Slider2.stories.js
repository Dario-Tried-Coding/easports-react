import React from 'react';
import Slider2 from 'Components/2-Molecules/Sliders/Slider2';

export default {
  title: "Molecules/Sliders/Slider2",
  component: Slider2
}

export const template = (args) => <Slider2 {...args} />
template.args = {
  data: [
    {
      isActive: true,
      to: "/games",
      text: "Nuovi Giochi"
    },
    {
      isActive: false,
      to: "/games/coming-soon",
      text: "Presto Disponibile"
    },
    {
      isActive: false,
      to: "/sports",
      text: "EA SPORTS™"
    },
    {
      isActive: false,
      to: "/games/starwars",
      text: "STAR WARS™"
    },
    {
      isActive: false,
      to: "/the-sims",
      text: "The Sims™"
    },
    {
      isActive: false,
      to: "/ea-originals",
      text: "EA Originals"
    },
    {
      isActive: false,
      to: "/",
      text: "Pogo™"
    },
    {
      isActive: false,
      to: "/games/library",
      text: "Tutti i giochi"
    }
  ]
}