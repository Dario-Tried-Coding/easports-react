import Navigation from "Components/4-Templates/Navigation";
import React from "react";
import Helmet from "react-helmet";
import NavigationData from "Mock-Data/Games/Navigation";
import Sidebar from "Mock-Data/Games/Sidebar";
import { Links } from "Components/4-Templates/Links";
import HeroImg, { HeroVideo } from "Mock-Data/Games/Hero";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Card1_1 from "Components/2-Molecules/Cards/Card1_1";
import UltimiGiochi from "Mock-Data/Games/UltimiGiochi";
import Slider2 from "Components/2-Molecules/Sliders/Slider2";
import Slider from "Mock-Data/Games/Slider";
import Banner1 from "Components/4-Templates/Banner1";

export default function Games() {
  const navigationData = JSON.parse(NavigationData);
  const sidebarData = JSON.parse(Sidebar);
  const heroBannerData = JSON.parse(HeroImg);
  const heroVideoData = JSON.parse(HeroVideo);
  const sliderData = JSON.parse(Slider)
  const ultimiGiochiData = JSON.parse(UltimiGiochi)

  return (
    <>
      <Helmet>
        <title>Ultimi giochi - Sito ufficiale EA</title>
      </Helmet>
      <Navigation navigationData={navigationData} sidebarData={sidebarData}>
        <Banner1 stacked video videoData={heroVideoData} bgImg bgImageData={heroBannerData} />
        <Slider2 data={sliderData} />
        <Section title="Ultimi giochi" btnContent="Vedi tutti i giochi" to="/games/library" margTop="small" btnMargTop="xlarge" margBottom="xlarge">
          <WrCards>
            {ultimiGiochiData.map((obj, i) => (
              <Card1_1 key={i} bgImg={obj.bgImg} logoImg={obj.logoImg} logoImgWidth={obj.logoImgWidth} gradient={obj.gradient} cardLink={obj.cardLink} links={obj.links} />
            ))}
          </WrCards>
        </Section>
        <Links />
      </Navigation>
    </>
  );
}
