import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Section from "Components/4-Templates/Section";
import React from "react";

import Card2 from "Components/2-Molecules/Cards/Card2";

export default {
  title: "Templates/Section",
  component: Section,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 1
    },
  }
};

export const template = ({numOfChildren, args}) => {
  return (
    <Section {...args}>
      {Array(numOfChildren).fill("").map(el => <div style={{height: "250px", width: "100%", backgroundColor: "lightGrey", borderRadius: "5px"}}></div> )}
    </Section>
  )
};
template.args = {
  title: "Placeholder Title",
  btnContent: "Placeholder",
  numOfChildren: 1
}

export const ultimeNovita = (args) => {
  const mockData = Array(6).fill("")

  return (
    <Section {...args}>
      <WrCards gap="--gap-cards-2">
        {mockData.map(item => <Card2 />)}
      </WrCards>
    </Section>
  )
};
ultimeNovita.args = {
  title: "Ultime Novità",
  btnContent: "Scopri di più",
}
ultimeNovita.parameters = {
  controls: {
    exclude: ["numOfChildren"]
  }
}
// ultimeNovita.argTypes = {
//   numOfChildren: {
//     control: false
//   }
// }