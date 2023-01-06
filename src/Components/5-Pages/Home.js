import React from "react";
import Card from "Components/2-Molecules/Cards/Card1";
import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";
import { Banner } from "Components/4-Templates/Banner";
import { Genitori } from "Components/4-Templates/Genitori";

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";
import { Links } from "Components/4-Templates/Links";
import Play from "Mock-Data/Home/Play";
import Hero from "Mock-Data/Home/Hero";
import NetworkNav from "Components/4-Templates/NetworkNav";

export default function Home() {
  const hero = JSON.parse(Hero)
  const ultimeNovita = JSON.parse(UltimeNovita);
  const play = JSON.parse(Play);

  return (
    <>
      <NetworkNav />

      <Banner stacked bgImageData={hero} textPosition="left" margInlineXL="6%" title="2022: un anno animato dal gioco" subtitle="Ripercorriamo il modo in cui i giocatori hanno apprezzato i nostri giochi nel 2022" textClrLight={false} btnTransparent={false} btnBgColor="var(--clr-dark-700)" btnColor="var(--clr-light-400)" btnContent="Esplora subito" />

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

      <Banner textPosition="left" textAlign="left" bgImageData={play}  btnContent="Sfoglia offerte" btnColor="var(--clr-light-400)" logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" body="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli." />
      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />
      <Links />
    </>
  );
}
