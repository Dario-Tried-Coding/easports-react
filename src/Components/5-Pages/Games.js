import Navigation from "Components/4-Templates/Navigation";
import React from "react";
import NavigationData from "Mock-Data/Games/Navigation";
import Sidebar from "Mock-Data/Games/Sidebar";
import { Links } from "Components/4-Templates/Links";
import HeroImg, { HeroVideo } from "Mock-Data/Games/Hero";
import { Banner } from "Components/4-Templates/Banner";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Card1_1 from "Components/2-Molecules/Cards/Card1_1";
import UltimiGiochi from "Mock-Data/Games/UltimiGiochi";
import Slider2 from "Components/2-Molecules/Sliders/Slider2";
import Slider from "Mock-Data/Games/Slider";

export default function Games() {
  const navigationData = JSON.parse(NavigationData);
  const sidebarData = JSON.parse(Sidebar);
  const heroBannerData = JSON.parse(HeroImg);
  const heroVideoData = JSON.parse(HeroVideo);
  const sliderData = JSON.parse(Slider)
  const ultimiGiochiData = JSON.parse(UltimiGiochi)

  return (
    <Navigation navigationData={navigationData} sidebarData={sidebarData}>
      <Banner stacked bgImageData={heroBannerData} bgVideoData={heroVideoData} />

      <Slider2 data={sliderData} />

      <Section title="Ultimi giochi" btnContent="Vedi tutti i giochi" to="/games/library" margTop="small" btnMargTop="xlarge" margBottom="xlarge">
        <WrCards>
          {ultimiGiochiData.map((obj, i) => (
            <Card1_1 key={i} data={obj} />
          ))}
        </WrCards>
      </Section>

      <Links />
    </Navigation>
  );
}
