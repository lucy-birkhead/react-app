import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1 id="city">{props.data.city}</h1> 
    <ul>
      <li className="date">
        <FormattedDate date={props.data.date} />
      </li>
    </ul>
    <h2>Current Conditions:</h2>{" "}
    <h4 id="description" className="text-capitalize">
      <em>{props.data.description}</em>
    </h4>{" "}
    <div className="units">
      <h3>
        <img src={props.data.iconUrl} alt={props.data.description} id="icon" className="float-center" />
        <div id="temperature">{Math.round(props.data.temperature)}</div>
        <a href="#" id="celsius-link" className="active">
          °C |
        </a>
        <a href="#" id="fahrenheit-link">
          °F
        </a>
        <ul className="standard-text">
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.data.wind}</span> km/h
          </li>
        </ul>
      </h3>
    </div>
    <br />{" "}
    <p>
    <a
      className="github"
      href="https://github.com/lucy-birkhead/react-app"
    >
      React Weather App Github Repository
    </a>
    </p>
    <p>Coded by Lucy B.</p>
  </div>
  
  );
}