import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
    let [city, setCity] = useState("");
    let [temp, setTemp] = useState(null);
    let [descr, setDescr] = useState("");
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [icon, setIcon] = useState(null);
    let [message, setMessage] = useState("");

    function showTemp(response) {
        setTemp(response.data.main.temp);
        setDescr(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.length > 0) {
            setMessage(
                <div>
                    <h2>{city}</h2>
                    <ul>
                        <li>Temperature: {Math.round(temp)}°C</li>
                        <li>Description: {descr}</li>
                        <li>Humidity: {humidity}%</li>
                        <li>Wind: {Math.round(wind)} km/h</li>
                        <li>
                            <img src={iconID} alt="Weather icon" width="100px" />
                        </li>
                    </ul>
                </div>
            );
        } else {
            setMessage(`Enter a city...`);
        }
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9470fa529ce6770f386cc31e17d6a25&units=metric`;
    axios.get(url).then(showTemp);

    let iconID = `http://openweathermap.org/img/wn/${icon}.png`;
    axios.get(iconID).then(showTemp);

    function updateCity(event) {
        setCity(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Type a city..."
                    className="search"
                    onChange={updateCity}
                />
                <input type="submit" className="submit" value="Search" />
            </form>
            <h2 className="message">{message}</h2>
        </div>
    );
}
