import Cards2Set from "Components/3-Organisms/Cards2Set";
import React from "react";

const mockData = [
  {
    setTitle: "Set 1",
    cards: [1, 2, 3, 4, 5, 6],
  },
  {
    setTitle: "Set 2",
    cards: [1, 2, 3, 4, 5, 6],
  },
  {
    setTitle: "Set 3",
    cards: [1, 2, 3, 4, 5, 6],
  },
  {
    setTitle: "Set 4",
    cards: [1, 2, 3, 4, 5, 6],
  },
  {
    setTitle: "Set 5",
    cards: [1, 2, 3, 4, 5, 6],
  },
  {
    setTitle: "Set 6",
    cards: [1, 2, 3, 4, 5, 6],
  },
];

export default {
  title: "Organisms/Cards2Set",
  component: Cards2Set,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
};

export const Template = () => (
  <div
    className="flow"
    style={{
      // @ts-ignore
      "--flow": "2rem",
    }}
  >
    <Cards2Set data={mockData} />
  </div>
);
