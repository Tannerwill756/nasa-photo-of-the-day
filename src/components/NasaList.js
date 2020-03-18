import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

const NasaList = props => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=WVq5X2rOZ0WNIzMnP5TpqV1StHzpRlN6DKqRlp8E')
            .then( response => {
                // console.log(response);
                setImage(response.data)
            })
    }, [])
}

export default NasaList;