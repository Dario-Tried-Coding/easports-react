import Navigation from 'Components/4-Templates/Navigation';
import React from 'react';

import NavigationData from 'Mock-Data/EaApp/Navigation';
import Sidebar from 'Mock-Data/EaApp/Sidebar';
import Banner1 from 'Components/4-Templates/Banner1';
import { bgImgData, videoData } from 'Mock-Data/EaApp/Hero';
import { banner1, banner2, banner3 } from 'Mock-Data/EaApp/Banners';
import { Links } from 'Components/4-Templates/Links';

function EaApp({}) {
  const navigationData = JSON.parse(NavigationData)
  const sidebarData = JSON.parse(Sidebar)
  const heroVideoData = JSON.parse(videoData)
  const heroBgImgData = JSON.parse(bgImgData)
  const banner1VideoData = JSON.parse(banner1)
  const banner2VideoData = JSON.parse(banner2)
  const banner3VideoData = JSON.parse(banner3)

  return ( <Navigation navigationData={navigationData} sidebarData={sidebarData}>
    <Banner1 stacked animateEntrance textPosition="left" textAlign='left' title='EA app per Windows' subTitle='Potenzia la nuova generazione di gioco per PC di EA' btnContent="Scarica l'EA app" video videoData={heroVideoData} bgImg bgImageData={heroBgImgData} />
    <div style={{width: "100%", height: 100, backgroundColor: "var(--clr-dark-900)"}}></div>
    <Banner1 stacked animateEntrance textPosition='right' textAlign='left' title='Progettata per la velocità' body='Con questa piattaforma veloce e ottimizzata, scoprire, scaricare e giocare è più facile che mai. Accedi ai tuoi giochi in meno tempo e meno clic.' videoOnce video videoData={banner1VideoData}/>
    <Banner1 stacked animateEntrance textPosition='left' textAlign='left' title='Costruita per connettere' body='Collega il tuo account EA alle tue piattaforme di gioco preferite per importare le liste di amici e giocare con loro.' videoOnce video videoData={banner2VideoData}/>
    <Banner1 stacked animateEntrance textPosition='right' textAlign='left' title='Novità a portata di mano' body='Scopri a cosa giocano i tuoi amici, scopri le ultime uscite di EA e aggiungile alla tua collezione in pochi clic.' videoOnce video videoData={banner3VideoData}/>
    <Links />
  </Navigation> );
}

export default EaApp;