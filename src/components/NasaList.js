import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


const NasaList = () => {
    const [nasa, setNasa] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=WVq5X2rOZ0WNIzMnP5TpqV1StHzpRlN6DKqRlp8E')
            .then( response => {
                console.log(response.data);
                setNasa(response.data)
            })
            .catch (error => {
                console.log('you get an error', error);
            })
    }, [])

    return (
        <div className = "nasaInfo">
            <NasaCard title={nasa.title} img={nasa.url} date={nasa.date} explan = {nasa.explanation} copyright={nasa.copyright} /> 
        </div>
    )
}

export default NasaList;