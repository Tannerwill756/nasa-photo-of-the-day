import React from "react";
import NasaList from "./NasaList";

const NasaCard = props => {
    console.log(props)
    return (
        <div className = "nasaCard">
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <img src={props.img} alt="" />
            <p>{props.explan}</p>
            <p>Copyright {props.copyright}</p>
        </div>
    )
}

export default NasaCard;