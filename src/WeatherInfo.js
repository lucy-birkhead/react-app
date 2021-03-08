import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <WeatherIcon 
        code={props.data.icon} />
        
        
        <WeatherTemperature 
        celsius={props.data.temperature} />
       
        <ul className="standard-text">
          <li className="humidity">
            Humidity: <span>{props.data.humidity}</span>%
          </li>
          <li className="wind">
            Wind: <span>{props.data.wind}</span> km/h
          </li>
        </ul>
      </h3>
    </div>
    <br />{" "}
    
  </div>
  
  );
}