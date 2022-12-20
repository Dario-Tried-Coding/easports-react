import React from "react";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Card2 from "Components/2-Molecules/Cards/Card2";
import { Genitori } from 'Components/4-Templates/Genitori';

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";
import Card from "Components/2-Molecules/Card";
import CardsWrapper from "Components/3-Organisms/CardsWrapper";

//Style for Cards
import style from "../../SCSS/2-Molecules/Cards/Card.module.scss";

export default function Home() {
  const ultimeNovita = JSON.parse(UltimeNovita);

  return (
    <>
      <h1>Home</h1>

        <section className={style["section-wrapper"]}>
        <h1>Giochi in evidenza</h1>
      <CardsWrapper wrapperClass={style["cards-wrapper"]}>
        {cards => {
          return cards.map((card, i) => {
            return < Card
            key={card + i}
            containerClass={`${style["fifa23-card"]}`}
            imgPath={card.imgPath}
            altIMg={card.altIMg}
            logoClass={`${style["fifa23-logo"]}`}
            imgLogoPath={card.imgLogoPath}
            altLogo={card.altLogo}
            width={card.width}/>
          })
        }}
      </CardsWrapper>
       </section>


      <Section>
        <WrCards gap="--gap-cards-2">
          {ultimeNovita.map((obj, index) => <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />)}
        </WrCards>
      </Section>
      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />
    </>
  );
}
