import React from "react";
import Card from "Components/2-Molecules/Cards/Card1";
import Card2 from "Components/2-Molecules/Cards/Card2";
import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import { Genitori } from 'Components/4-Templates/Genitori';

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";



export default function Home() {
  const ultimeNovita = JSON.parse(UltimeNovita);

  return (
    <>
      <h1>Home</h1>

        <CardsSection title="Giochi in evidenza" sectionClass={style["section-wrapper"]}>
         <CardsWrapper wrapperClass={style["cards-wrapper"]}>
          {cards => {
           return cards.map((card, i) => {
             return < Card
             key={card + i}
             containerClass={card.containerClass}
             imgPath={card.imgPath}
             altIMg={card.altIMg}
             logoClass={card.logoClass}
             imgLogoPath={card.imgLogoPath}
             altLogo={card.altLogo}
             width={card.width}
             link={<p>Sito Ufficiale</p>}
             height={card.height}/>
           })
         }}
         </CardsWrapper>
        </CardsSection>

      <Section>
        <WrCards gap="--gap-cards-2">
          {ultimeNovita.map((obj, index) => <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />)}
        </WrCards>
      </Section>
      
      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />
    </>
  );
}
