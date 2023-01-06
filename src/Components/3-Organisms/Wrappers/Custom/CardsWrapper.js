import React, {useState} from "react";
import {cards} from "../../../../Mock-Data/Home/GiochiInEvidenza"

const CardsWrapper = ({InitialDataBAse = cards, wrapperClass, children}) => {
    const [cardsArray, setCardsArray] = useState(InitialDataBAse)


    return (
        <div className={wrapperClass}>
            {children(cardsArray)}
        </div>
     );
}

export default CardsWrapper;