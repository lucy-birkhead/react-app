import React, { useState } from "react";
import axios from "axios";
import "./styles.css";


export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: "Wednesday 07:00",
    description: response.data.weather[0].description,
    iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    wind: response.data.wind.speed,
    city: response.data.name
  });
  
  setReady(true);
}

if (weatherData.ready) {
  return (
    <div className="weather-app-wrapper">
      <div className="container-1">
        <form>
          <input
            type="search"
            placeholder="Enter your city"
            id="enterCity"
            autocomplete="off"
          ></input>
          <input
            type="submit"
            className="btn btn-primary w-20"
            value="Search"
          ></input>
        </form>
      </div>{" "}
      <br /> <h1 id="city">{weatherData.city}</h1> 
      <br /> <p>{weatherData.date}</p> 
      <h2>Current Conditions:</h2>{" "}
      <h4 id="description" className="text-capitalize">
        <em>{weatherData.description}</em>
      </h4>{" "}
      <div className="units">
        <h3>
          <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" className="float-center" />
          <div id="temperature">{Math.round(weatherData.temperature)}</div>
          <a href="#" id="celsius-link" className="active">
            °C |
          </a>
          <a href="#" id="fahrenheit-link">
            °F
          </a>
          <ul className="standard-text">
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </h3>
      </div>
      <br />{" "}
      <a
        className="github"
        href="https://github.com/lucy-birkhead/react-app"
      >
        React Weather App Github Repository
      </a>{" "}
      <p>Coded by Lucy B.</p>
    </div>
  );
} else {
  const apiKey = "19e635cfd49a09267430a421d97c1f42";
  let city = "Corrales";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}


 
}
