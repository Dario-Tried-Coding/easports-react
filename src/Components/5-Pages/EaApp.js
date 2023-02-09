import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Video from 'Components/1-Atoms/Video';
import FAQ from 'Components/1-Atoms/FAQ';
import Navigation from 'Components/4-Templates/Navigation';
import Banner1 from 'Components/4-Templates/Banner1';
import Section1 from 'Components/4-Templates/Section1';
import { Genitori } from 'Components/4-Templates/Genitori';
import { Links } from 'Components/4-Templates/Links';
import Footer from 'Components/4-Templates/Footer';

import NavigationData from 'Mock-Data/EaApp/Navigation';
import Sidebar from 'Mock-Data/EaApp/Sidebar';
import { bgImgData, videoData } from 'Mock-Data/EaApp/Hero';
import { banner1, banner2, banner3 } from 'Mock-Data/EaApp/Banners';
import FAQjson from 'Mock-Data/EaApp/FAQ';

const MotionLink = motion(Link)

function EaApp() {
  const navigationData = JSON.parse(NavigationData)
  const sidebarData = JSON.parse(Sidebar)
  const heroVideoData = JSON.parse(videoData)
  const heroBgImgData = JSON.parse(bgImgData)
  const banner1VideoData = JSON.parse(banner1)
  const banner2VideoData = JSON.parse(banner2)
  const banner3VideoData = JSON.parse(banner3)
  const FAQData = JSON.parse(FAQjson)

  return ( <>
    <Helmet>
      <title>Scarica l'EA app – Potenzia la nuova generazione di gioco per PC - Electronic Arts</title>
    </Helmet>
    <Navigation navigationData={navigationData} sidebarData={sidebarData}>
      <div style={{backgroundColor: "var(--clr-light-100)"}}>
        <Banner1 stacked animateEntrance textPosition="left" textAlign='left' title='EA app per Windows' subTitle='Potenzia la nuova generazione di gioco per PC di EA' btnContent="Scarica l'EA app" video videoData={heroVideoData} bgImg bgImageData={heroBgImgData} />
        
        <Genitori bgColor='var(--clr-dark-900)' textClr='var(--clr-light-400)' heading='Giochi su Mac? Scarica Origin per Mac.' btnContent='Scarica' btnTransparent btnColor='var(--clr-light-400)' />
        
        <Banner1 stacked animateEntrance textPosition='right' textAlign='left' title='Progettata per la velocità' body='Con questa piattaforma veloce e ottimizzata, scoprire, scaricare e giocare è più facile che mai. Accedi ai tuoi giochi in meno tempo e meno clic.' videoOnce video videoData={banner1VideoData}/>
        <Banner1 stacked animateEntrance textPosition='left' textAlign='left' title='Costruita per connettere' body='Collega il tuo account EA alle tue piattaforme di gioco preferite per importare le liste di amici e giocare con loro.' videoOnce video videoData={banner2VideoData}/>
        <Banner1 stacked animateEntrance textPosition='right' textAlign='left' title='Novità a portata di mano' body='Scopri a cosa giocano i tuoi amici, scopri le ultime uscite di EA e aggiungile alla tua collezione in pochi clic.' videoOnce video videoData={banner3VideoData}/>
        
        <Section1 title='Scopri nuovi giochi e gioca ai tuoi classici preferiti' subtitle='Esplora una vasta libreria di titoli in continua evoluzione, dagli Indie più apprezzati ai grandissimi successi.' spacerHeightSmall={3} spacerHeightMedium={2} spacerHeightLarge={1} spacerHeightXlarge={1}>
          <Video autoPlay />
        </Section1>
        
        <Genitori spacerHeightSmall={4} spacerHeightMedium={3} spacerHeightLarge={2} spacerHeightXlarge={2} bgColor='var(--clr-dark-900)' textClr='var(--clr-light-400)' heading="L'EA app sostituirà Origin: leggi per saperne di più." btnContent='Leggi il post' btnTransparent btnColor='var(--clr-light-400)' />
        
        <Section1 bgColor='hsl(215, 25%, 87%)' title="Scarica l'EA app">
          <MotionLink whileHover={{scale: 1.025}} to="/"><img style={{maxWidth: 250}} src="https://media.contentapi.ea.com/content/dam/eacom/ea-app/common/ea-app-cta-windows.png.adapt.crop16x9.652w.png" alt="CTA logo" /></MotionLink>
          <h6 style={{fontFamily: "var(--ff-heading-400)", fontSize: "var(--fs-300)", fontWeight: 400, marginTop: 10}}>Giochi su Mac? <Link style={{color: "var(--clr-brand-400)"}} to="/">Scarica Origin per Mac</Link></h6>
        </Section1>
        
        <Section1 title='FAQ' textAlign='left' paddInline>
          {FAQData.map((obj, i) => <FAQ key={i} {...obj} />)}
        </Section1>

        <Links />
        
        <Footer />
      </div>
    </Navigation>
  </> );
}

export default EaApp;