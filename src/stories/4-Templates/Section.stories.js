import Section from "Components/4-Templates/Section";
import React from "react";

import Cards2Set from "Components/3-Organisms/Cards2Set";
import ultimeNovitaMockData from "../../Mock-Data/Home/UltimeNovita"

export default {
  title: "Templates/Section",
  component: Section,
};

export const ultimeNovita = (args) => {
  return (
    <Section {...args}>
      <Cards2Set data={JSON.parse(ultimeNovitaMockData)} />
    </Section>
  )
};
ultimeNovita.args = {
  title: "Placeholder Title",
  btnContent: "Placeholder"
}
