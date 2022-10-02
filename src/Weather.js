import React from "react";
import axios from "axios";
import { FallingLines } from 'react-loader-spinner';
import './App.css';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`)
    }

    let apiKey = "c9470fa529ce6770f386cc31e17d6a25";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div>
            <h2>Hey from Weather</h2>
            <FallingLines
                color="#61dafb"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
            <br />
            <p>Open-soursed on <a href="https://github.com/Natalira16/weather-app-react" className="GitHubLink" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
    )
}