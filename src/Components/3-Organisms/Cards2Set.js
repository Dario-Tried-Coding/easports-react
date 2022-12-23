import Card2 from "Components/2-Molecules/Cards/Card2";
import Slider1 from "Components/2-Molecules/Sliders/Slider1";
import React, { useState } from "react";
import { useEffect } from "react";
import WrCards from "./Wrappers/WrCards";

function Cards2Set({ data }) {
  const [activeSet, setActiveSet] = useState({ setTitle: "", cards: [] });

  useEffect(() => {
    setActiveSet(data[0]);
  }, [data]);

  function handleClick(e) {
    setActiveSet(data.find((obj) => obj.setTitle === e.target.closest("li").title));
  }

  return (
    <>
      <Slider1 data={data} activate={handleClick} activeSet={activeSet}/>
      <WrCards gap="--gap-cards-2">
        {activeSet.cards.map((obj, index) => (
          <Card2 key={index} img={obj.img} from={obj.from} date={obj.date} title={obj.title} body={obj.body} />
        ))}
      </WrCards>
    </>
  );
}

export default Cards2Set;
