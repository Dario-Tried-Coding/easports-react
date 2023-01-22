import Slider2 from 'Components/2-Molecules/Sliders/Slider2';
import WrCards from 'Components/3-Organisms/Wrappers/WrCards';
import { Banner } from 'Components/4-Templates/Banner';
import { Links } from 'Components/4-Templates/Links';
import Navigation from 'Components/4-Templates/Navigation';
import Section from 'Components/4-Templates/Section';
import React from 'react';

import NavigationData from 'Mock-Data/ComingSoon/Navigation';
import Sidebar from 'Mock-Data/ComingSoon/Sidebar';
import {HeroVideo} from "../../Mock-Data/ComingSoon/Hero"
import Slider from 'Mock-Data/ComingSoon/Slider';

export default function ComingSoon() {
  const navigationData = JSON.parse(NavigationData)
  const sidebarData = JSON.parse(Sidebar)
  const heroVideoData = JSON.parse(HeroVideo)
  const sliderData = JSON.parse(Slider)

  return <Navigation navigationData={navigationData} sidebarData={sidebarData}>
    <Banner bgVideoData={heroVideoData} stacked/>
    <Slider2 data={sliderData} />
    <Section title='Prossimamente' margTop='small'>
      <WrCards>
        {["", "", "", "", ""].map((item, i) => <div key={i} style={{width: "100%", height: 100, backgroundColor: "grey"}}></div> )}
      </WrCards>
    </Section>
    <Links />
  </Navigation>
}