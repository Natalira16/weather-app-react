import React from "react";
import Search from "./Search";
import './App.css';

export default function Weather(props) {
    return (
        <div className="content">
            <div className="container">
                <div className="header">
                    <p>
                        <a href="https://www.google.com/search?q=weather+berlin" className="city" id="quick-search_berlin">Berlin</a>
                        <a href="https://www.google.com/search?q=weather+paris" className="city" id="quick-search_paris">Paris</a>
                        <a href="https://www.google.com/search?q=weather+new+york" className="city" id="quick-search_newyork">New York</a>
                        <a href="https://www.google.com/search?q=weather+sydney" className="city" id="quick-search_sydney">Sydney</a>
                    </p>
                </div>
                <Search />

                <p className="GitHubTitle"><a href="https://github.com/Natalira16/weather-app-react" className="GitHubLink" target="_blank" rel="noreferrer">Open-sourse code on GitHub</a> by Nataliia Medvedenko</p>
            </div>
        </div>
    )
}