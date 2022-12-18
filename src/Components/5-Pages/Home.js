import React from "react";
import Section from "Components/4-Templates/Section";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";
import Card2 from "Components/2-Molecules/Cards/Card2";
import { Genitori } from 'Components/4-Templates/Genitori';

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

export default function Home() {
  const ultimeNovita = JSON.parse(UltimeNovita);

  return (
    <>
      <h1>Home</h1>
      <Section btnSpacer={"3rem 0"} title="Ultime Novità">
        <WrCards gap="--gap-cards-2">
          {ultimeNovita.map((obj, index) => (
            <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />
          ))}
        </WrCards>
      </Section>
      <Genitori  heading='Genitori: il controllo dei videogiochi è nelle vostre mani.' btnContent='Scopri di più' />
    </>
  );
}
