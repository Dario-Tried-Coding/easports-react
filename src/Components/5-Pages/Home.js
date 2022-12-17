import Card2 from 'Components/2-Molecules/Cards/Card2';
import WrCards from 'Components/3-Organisms/Wrappers/WrCards';
import React from 'react';

// array
import Cards2 from 'Mock-Data/Home/Cards2';
import { Genitori } from 'Components/2-Molecules/Cards/Genitori';

export default function Home() {
  const cards2Obj = JSON.parse(Cards2)

  return <>
    <h1>Home</h1>
    <WrCards gap={"--gap-cards-2"}>
      {cards2Obj.map(obj => <Card2 img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />)}
    </WrCards>
    <Genitori  heading='Genitori: il controllo dei videogiochi è nelle vostre mani.' btnContent='Scopri di più'/>
    
  </>
}