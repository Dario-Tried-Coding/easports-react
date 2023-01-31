import React from "react";
// import Card from "Components/2-Molecules/Cards/Card1";
// import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
// import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";
import { Genitori } from "Components/4-Templates/Genitori";

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
// import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";
import { Links } from "Components/4-Templates/Links";
import Play from "Mock-Data/Home/Play";
import Navigation from "Components/4-Templates/Navigation";
import Navbar from "Mock-Data/Home/Navigation";
import Sidebar from "Mock-Data/Home/Sidebar";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";

import Footer from "Components/4-Templates/Footer";
import Banner1 from "Components/4-Templates/Banner1";
import { videoData } from "Mock-Data/Home/Hero";

export default function Home() {
  const navigation = JSON.parse(Navbar);
  const sidebar = JSON.parse(Sidebar);
  const heroVideoData = JSON.parse(videoData)
  const ultimeNovita = JSON.parse(UltimeNovita);
  const play = JSON.parse(Play);

  return (
    <>
      <Navigation navigationData={navigation} sidebarData={sidebar}>
        <Banner1 stacked animateEntrance textPosition="right" textColor="light" title="Gioca oggi a Dead Space™" btnContent="Acquista ora" logoImg="https://media.contentapi.ea.com/content/dam/gin/common/logos/dead-space-logo-main-page-hero-marge.svg" video videoData={heroVideoData} spacerHeightSmall={43.75} spacerHeightMedium={6} spacerHeightLarge={6} spacerHeightXlarge={6} />

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
            {["", "", "", "", "", ""].map((item, i) => (
              <div style={{ backgroundColor: "lightgray", width: "100%", aspectRatio: "1 / 1" }}></div>
            ))}
          </WrCards>
        </Section>

        <Section title="Ultime Novita" btnContent="Scopri di più">
          <Cards2Set data={ultimeNovita} />
        </Section>

        <Banner1 textColor="light" textPosition="left" textAlign="left" body="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli." btnTransparent btnContent="Iscriviti subito" to="/ea-play" logoImgWidth={50} logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" bgImg bgImageData={play} />

        <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />

        <Links />
        
        <Footer />
      </Navigation>
    </>
  );
}
