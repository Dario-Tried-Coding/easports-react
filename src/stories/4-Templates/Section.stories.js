import Section from "Components/4-Templates/Section";
import React from "react";

import Cards2Set from "Components/3-Organisms/Cards2Set";
import ultimeNovitaMockData from "../../Mock-Data/Home/UltimeNovita"

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
<<<<<<< HEAD
=======
  const mockData = Array(6).fill("")

>>>>>>> dev
  return (
    <Section {...args}>
      <Cards2Set data={JSON.parse(ultimeNovitaMockData)} />
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