import React from "react"


const CardsSection = (props) => {

    const {title, children, sectionClass} = props

    return (
        <div className={sectionClass}>
            <h1>{title}</h1>
            {children}
        </div>
     );
}


export default CardsSection