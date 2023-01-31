import React from 'react';
import Cards2Set from 'Components/3-Organisms/Cards2Set';
import UltimeNovita from 'Mock-Data/Home/UltimeNovita';

export default {
  title: "Organisms/Cards2Set",
  component: Cards2Set
}

export const template = (args) => <Cards2Set {...args}/>
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
  ]
}

export const ultimeNovita = (args) => <Cards2Set {...args}/>
ultimeNovita.args = {
  data: JSON.parse(UltimeNovita)
}