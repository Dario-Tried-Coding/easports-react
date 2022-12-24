import Card2 from "Components/2-Molecules/Cards/Card2";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Section from "Components/4-Templates/Section";
import UltimeNovita from "Mock-Data/Home/UltimeNovita";
import React from "react";

export default {
  title: "Templates/Section",
  component: Section,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 1
    },
    flowRem:{
      options: ["--flow-spacer-section-100"],
      control: {type: "select"}
    }
  }
};

export const template = ({numOfChildren, flowRem, args}) => {
  return (
    <Section flowRem={flowRem} {...args}>
      {Array(numOfChildren).fill("").map(el => <div style={{height: "250px", width: "100%", backgroundColor: "lightGrey", borderRadius: "5px"}}></div> )}
    </Section>
  )
};
template.args = {
  title: "Placeholder Title",
  btnContent: "Placeholder",
  numOfChildren: 1,
  flowRem: "--flow-spacer-section-100"
}

export const ultimeNovita = ({flowRem, args}) => {
  return (
    <Section flowRem={flowRem} {...args}>
      <WrCards>
        {JSON.parse(UltimeNovita)[0].cards.map((obj, index) => <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />)}
      </WrCards>
    </Section>
  )
};
ultimeNovita.args = {
  title: "Ultime Novità",
  btnContent: "Scopri di più",
  flowRem: "--flow-spacer-section-100"
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