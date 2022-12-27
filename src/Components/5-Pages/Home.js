import React from "react";
import Card from "Components/2-Molecules/Cards/Card1";
import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";

import { Genitori } from "Components/4-Templates/Genitori";


// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";
import { Links } from "Components/4-Templates/Links";

export default function Home() {
  const ultimeNovita = JSON.parse(UltimeNovita);

  return (
    <>
      <h1>Home</h1>

      <CardsSection title="Giochi in evidenza" sectionClass={style["section-wrapper"]}>
        <CardsWrapper wrapperClass={style["cards-wrapper"]}>
          {(cards) => {
            return cards.map((card, i) => {
              return <Card key={card + i} containerClass={card.containerClass} imgPath={card.imgPath} altIMg={card.altIMg} logoClass={card.logoClass} imgLogoPath={card.imgLogoPath} altLogo={card.altLogo} width={card.width} link={<p>Sito Ufficiale</p>} height={card.height} />;
            });
          }}
        </CardsWrapper>
      </CardsSection>

      <Section title="Ultime Novita" btnContent="Scopri di più">
        <Cards2Set data={ultimeNovita} />
      </Section>

      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />
      
      <Links />
    </>
  );
}
