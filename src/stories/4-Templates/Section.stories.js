import Card2 from "Components/2-Molecules/Cards/Card2";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Section from "Components/4-Templates/Section";
import UltimeNovita from "Mock-Data/Home/UltimeNovita";
import UltimiGiochi from "Mock-Data/Games/UltimiGiochi";
import React from "react";
import Card1_1 from "Components/2-Molecules/Cards/Card1_1";

export default {
  title: "Templates/Section",
  component: Section,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 1
    },
    margTop: {
      control: "inline-radio",
      options: ["default", "small", "medium", "large", "xlarge"]
    },
    margBottom: {
      control: "inline-radio",
      options: ["default", "small", "medium", "large", "xlarge"]
    },
    flow: {
      control: "inline-radio",
      options: ["default", "small", "medium", "large", "xlarge"]
    },
    titleMargBottom: {
      control: "inline-radio",
      options: ["default", "small", "medium", "large", "xlarge"]
    },
    btnMargTop: {
      control: "inline-radio",
      options: ["default", "small", "medium", "large", "xlarge"]
    },
  }
};

export const template = ({numOfChildren, margTop, margBottom, flow, titleMargBottom, btnMargTop, args}) => {
  return (
    <Section margTop={margTop} margBottom={margBottom} flow={flow} titleMargBottom={titleMargBottom} btnMargTop={btnMargTop} {...args}>
      {Array(numOfChildren).fill("").map(el => <div style={{height: "250px", width: "100%", backgroundColor: "lightGrey", borderRadius: "5px"}}></div> )}
    </Section>
  )
};
template.args = {
  title: "Placeholder Title",
  btnContent: "Placeholder",
  numOfChildren: 1,
  margTop: "default",
  margBottom: "default",
  flow: "default",
  titleMargBottom: "default",
  btnMargTop: "default",
}

export const ultimeNovita = ({title, btnContent, margTop, margBottom, flow, titleMargBottom, btnMargTop, args}) => {
  return (
    <Section title={title} btnContent={btnContent} margTop={margTop} margBottom={margBottom} flow={flow} titleMargBottom={titleMargBottom} btnMargTop={btnMargTop} {...args}>
      <WrCards gap="--gap-cards-2">
        {JSON.parse(UltimeNovita)[0].cards.map((obj, index) => <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />)}
      </WrCards>
    </Section>
  )
};
ultimeNovita.args = {
  title: "Ultime Novità",
  btnContent: "Scopri di più",
  margTop: "default",
  margBottom: "default",
  flow: "default",
  titleMargBottom: "default",
  btnMargTop: "default",
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

export const ultimiGiochi = ({title, btnContent, margTop, margBottom, flow, titleMargBottom, btnMargTop, args}) => {
  return (
    <Section title={title} btnContent={btnContent} margTop={margTop} margBottom={margBottom} flow={flow} titleMargBottom={titleMargBottom} btnMargTop={btnMargTop} {...args}>
      <WrCards>
        {JSON.parse(UltimiGiochi).map((obj, i) => <Card1_1 key={i} bgImg={obj.bgImg} logoImg={obj.logoImg} logoImgWidth={obj.logoImgWidth} gradient={obj.gradient} cardLink={obj.cardLink} links={obj.links} />)}
      </WrCards>
    </Section>
  )
};
ultimiGiochi.args = {
  title: "Ultimi giochi",
  btnContent: "Vedi tutti i giochi",
  margTop: "small",
  margBottom: "xlarge",
  flow: "default",
  titleMargBottom: "default",
  btnMargTop: "xlarge",
}
ultimiGiochi.parameters = {
  controls: {
    exclude: ["numOfChildren"]
  }
}