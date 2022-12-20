import React, {useState} from "react";
import {cards} from "../../../Mock-Data/Home/cardsDatabase"

const CardsWrapper = ({InitialDataBAse = cards, wrapperClass, children}) => {
    const [cardsArray, setCardsArray] = useState(InitialDataBAse)


    return (
        <div className={wrapperClass}>
            {children(cardsArray)}
        </div>
     );
}

export default CardsWrapper;