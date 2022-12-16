import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Section from "Components/4-Templates/Section";
import React from "react";

import Card2 from "Components/2-Molecules/Cards/Card2";

export default {
  title: "Templates/Sections/Section",
  component: Section,
};

export const ultimeNovita = (args) => {
  const mockData = Array(6).fill("a")

  return (
    <Section {...args}>
      <WrCards gap="--gap-cards-2">
        {mockData.map(item => <Card2 />)}
      </WrCards>
    </Section>
  )
};
ultimeNovita.args = {
  title: "Placeholder Title",
}
