import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./styles.css";



export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    wind: response.data.wind.speed,
    city: response.data.name
  });
  
  setReady(true);
}

function search() {
  const apiKey = "19e635cfd49a09267430a421d97c1f42";
  
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
setCity(event.target.value);

}

if (weatherData.ready) {
  return (
    <div className="weather-app-wrapper">
      <div className="container-1">
       
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="enterCity"
            autocomplete="off"
            onChange={handleCityChange}
          ></input>
          <input
            type="submit"
            className="btn btn-primary w-20"
            value="Search"
          ></input>
        </form>
      </div>
      <WeatherInfo data={weatherData}/>
    </div>
  )
  } else {
  search();
  return "Loading...";
}
}
