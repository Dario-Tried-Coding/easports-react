import React from "react";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";
import { Genitori } from 'Components/4-Templates/Genitori';

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

export default function Home() {
  const ultimeNovita = JSON.parse(UltimeNovita);

  return (
    <>
      <h1>Home</h1>
      <Section title="Ultime Novità" btnContent="placeholder">
        <Cards2Set data={ultimeNovita} />
      </Section>
      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />
    </>
  );
}
