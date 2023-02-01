import Slider2 from 'Components/2-Molecules/Sliders/Slider2';
import { Links } from 'Components/4-Templates/Links';
import Navigation from 'Components/4-Templates/Navigation';
import Section from 'Components/4-Templates/Section';
import WrCards2 from 'Components/3-Organisms/Wrappers/WrCards2';
import { Card3 } from 'Components/2-Molecules/Cards/Card3';
import React from 'react';
import { Helmet } from 'react-helmet';

import NavigationData from 'Mock-Data/ComingSoon/Navigation';
import Sidebar from 'Mock-Data/ComingSoon/Sidebar';
import Hero, {HeroVideo} from "../../Mock-Data/ComingSoon/Hero"
import Slider from 'Mock-Data/ComingSoon/Slider';
import ComingSoonData from 'Mock-Data/ComingSoon/ComingSoon';
import Banner1 from 'Components/4-Templates/Banner1';

export default function ComingSoon() {
  const navigationData = JSON.parse(NavigationData)
  const sidebarData = JSON.parse(Sidebar)
  const heroVideoData = JSON.parse(HeroVideo)
  const heroBgImgData = JSON.parse(Hero)
  const sliderData = JSON.parse(Slider)
  const cardsData = JSON.parse(ComingSoonData)

  return (
  <>
    <Helmet>
      <title>Presto disponibili - Sito ufficiale EA</title>
    </Helmet>
    <Navigation navigationData={navigationData} sidebarData={sidebarData}>
      <Banner1 stacked video videoData={heroVideoData} bgImg bgImageData={heroBgImgData} />
      <Slider2 data={sliderData} />
      <Section title='Prossimamente' titleMargBottom='medium'>
        <WrCards2>
          {cardsData.map((obj, i) => <Card3 key={i} img={obj.img} alt={obj.alt} title={obj.title} releaseDate={obj.releaseDate} platforms={obj.platforms} genre={obj.genre} btnContent={obj.btnContent} to={obj.to} /> )}
        </WrCards2>
      </Section>
      <Links />
    </Navigation>
  </>)
}