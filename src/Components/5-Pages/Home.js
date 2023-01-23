import React from "react";
// import Card from "Components/2-Molecules/Cards/Card1";
// import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
// import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";
import { Banner } from "Components/4-Templates/Banner";
import { Genitori } from "Components/4-Templates/Genitori";

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
// import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";
import style from "../../SCSS/2-Molecules/Cards/Card3.module.scss"
import { Links } from "Components/4-Templates/Links";
import Play from "Mock-Data/Home/Play";
import Hero from "Mock-Data/Home/Hero";
import Navigation from "Components/4-Templates/Navigation";
import Navbar from "Mock-Data/Home/Navigation";
import Sidebar from "Mock-Data/Home/Sidebar";
import { Card3 } from "Components/2-Molecules/Cards/Card3";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";

export default function Home() {
  const navigation = JSON.parse(Navbar);
  const sidebar = JSON.parse(Sidebar);
  const hero = JSON.parse(Hero);
  const ultimeNovita = JSON.parse(UltimeNovita);
  const play = JSON.parse(Play);

  return (
    <>
      <Navigation navigationData={navigation} sidebarData={sidebar}>
        <Banner stacked logoMaxWidth="220px" logoImg="https://media.contentapi.ea.com/content/dam/eacom/images/2022/10/eacom-apex-eclipse-adaptive-logo-xl.png.adapt.crop7x2.1920w.png" bgImageData={hero} textPosition="right" margInlineXL="6%" subtitle="Strega i tuoi avversari nell'evento collezione" textClrLight btnTransparent={false} btnBgColor="var(--clr-light-400)" btnColor="var(--clr-dark-700)" btnContent="Altre informazioni" />

        {/* <CardsSection title="Giochi in evidenza" sectionClass={style["section-wrapper"]}>
          <CardsWrapper wrapperClass={style["cards-wrapper"]}>
            {(cards) => {
              return cards.map((card, i) => {
                return <Card key={card + i} containerClass={card.containerClass} imgPath={card.imgPath} altIMg={card.altIMg} logoClass={card.logoClass} imgLogoPath={card.imgLogoPath} altLogo={card.altLogo} width={card.width} link={<p>Sito Ufficiale</p>} height={card.height} />;
              });
            }}
          </CardsWrapper>
        </CardsSection> */}

        <Section btnContent="Ultimi giochi" title="Ultime novità">
          <WrCards>
            {["", "", "", "", "", ""].map((item, i) => <div style={{backgroundColor: "lightgray", width: "100%", aspectRatio: "1 / 1"}}></div> )}
          </WrCards>
        </Section>

        <Section title="Ultime Novita" btnContent="Scopri di più">
          <Cards2Set data={ultimeNovita} />
        </Section>
       <Section>
        <WrCards>
          <Card3 containerClass={style["containerClass"]} height={337} width={600} imgPath={"https://media.contentapi.ea.com/content/dam/eacom/dead-space/images/2021/07/deadspace-3840x2160.jpg.adapt.crop16x9.1920w.jpg"} title={"Dead Space"} data={"27 gennaio 2023"} piattaforma1={"PC"} piattaforma2={"PlayStation®5"} piattaforma3={"Xbox Series X|S"} generi={"Horror"} linkp1={"https://www.ea.com/it-it/games/library/pc-download"} linkp2={"https://www.ea.com/it-it/games/library/ps5"} linkp3={"https://www.ea.com/it-it/games/library/xbox-series-x"} linkg={"https://www.ea.com/it-it/games/library/horror"}/>
          <Card3 containerClass={style["containerClass"]} height={337} width={600} imgPath={"https://media.contentapi.ea.com/content/dam/eacom/wild-hearts/common/wild-hearts-featured-image-16x9.jpg.adapt.crop16x9.1455w.jpg"} title={"WILD HEARTS™"} data={"17 febbraio 2023"} piattaforma1={"PC"} piattaforma2={"PlayStation®5"} piattaforma3={"Xbox Series X|S"} generi={"Azione"} linkp1={"https://www.ea.com/it-it/games/library/pc-download"} linkp2={"https://www.ea.com/it-it/games/library/ps5"} linkp3={"https://www.ea.com/it-it/games/library/xbox-series-x"} linkg={"https://www.ea.com/it-it/games/library/action"}/>
          <Card3 containerClass={style["containerClass"]} height={337} width={600} imgPath={"https://media.contentapi.ea.com/content/dam/ea/starwars/star-wars-jedi-survivor/common/swj-survivor-featured-image-16x9.jpg.adapt.crop16x9.1455w.jpg"} title={"STAR WARS Jedi: Survivor™"} data={"17 marzo 2023"} piattaforma1={"PC"} piattaforma2={"PlayStation®5"} piattaforma3={"Xbox Series X|S"} generi={"Azione"} linkp1={"https://www.ea.com/it-it/games/library/pc-download"} linkp2={"https://www.ea.com/it-it/games/library/ps5"} linkp3={"https://www.ea.com/it-it/games/library/xbox-series-x"} linkg={"https://www.ea.com/it-it/games/library/action"}/>
          <Card3 containerClass={style["containerClass"]} height={337} width={600} imgPath={"https://media.contentapi.ea.com/content/dam/eacom/immortals-of-aveum/images/2022/12/final-immortals-16x9.jpg.adapt.crop16x9.1455w.jpg"} title={"Immortals Of Aveum"} data={"2023"} piattaforma1={"Scarica per PC"} piattaforma2={"PlayStation®5"} piattaforma3={"Xbox Series X|S"} generi={"Fuoco"} linkp1={"https://www.ea.com/it-it/games/library/pc-download"} linkp2={"https://www.ea.com/it-it/games/library/ps5"} linkp3={"https://www.ea.com/it-it/games/library/xbox-series-x"} linkg={"https://www.ea.com/it-it/games/library/shooter"}/>
          <Card3 containerClass={style["containerClass"]} height={337} width={600} imgPath={"https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-sports-pga-tour-coming-soon.jpg.adapt.crop16x9.1455w.jpg"} title={"EA SPORTS PGA TOUR"} data={"primavera 2023"} piattaforma1={"PC"} piattaforma2={"PlayStation®5"} piattaforma3={"Xbox Series X|S"} generi={"Avventura"} linkp1={"https://www.ea.com/it-it/games/library/pc-download"} linkp2={"https://www.ea.com/it-it/games/library/ps5"} linkp3={"https://www.ea.com/it-it/games/library/xbox-series-x"} linkg={"https://www.ea.com/it-it/games/library/adventure"}/>
        </WrCards>
       </Section>
        <Banner textPosition="left" textAlign="left" bgImageData={play} btnContent="Sfoglia offerte" btnColor="var(--clr-light-400)" logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" logoMaxWidth="240px" body="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli." />

        <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />

        <Links />
        
      </Navigation>
    </>
  );
}
