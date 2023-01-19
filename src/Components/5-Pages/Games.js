import Navigation from "Components/4-Templates/Navigation";
import React from "react";
import NavigationData from "Mock-Data/Games/Navigation";
import Sidebar from "Mock-Data/Games/Sidebar";
import { Links } from "Components/4-Templates/Links";
import HeroImg, { HeroVideo } from "Mock-Data/Games/Hero";
import { Banner } from "Components/4-Templates/Banner";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";

export default function Games() {
  const navigationData = JSON.parse(NavigationData);
  const sidebarData = JSON.parse(Sidebar);
  const heroBannerData = JSON.parse(HeroImg);
  const heroVideoData = JSON.parse(HeroVideo)

  return (
    <Navigation navigationData={navigationData} sidebarData={sidebarData}>
      <Banner stacked bgImageData={heroBannerData} bgVideoData={heroVideoData}/>

      <Section title="Ultimi giochi" btnContent="Vedi tutti i giochi" to="/games/library" margTop="small" btnMargTop="xlarge" margBottom="xlarge">
        <WrCards>
          {["", "", "", "", "", ""].map(item => <div style={{backgroundColor: "lightGrey", width: "100%", aspectRatio: "1 / 1"}}></div> )}
        </WrCards>
      </Section>

      <Links />
    </Navigation>
  );
}
