import React from "react";
import "./styles.css";
export default function App() {
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
      <br /> <h1 id="city">Corrales</h1> <p> </p> <h2>Current Conditions:</h2>{" "}
      <h4 id="description">
        <em>Clear</em>
      </h4>{" "}
      <div className="units">
        <h3>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain" id="icon" className="float-center" />
          <div id="temperature">47</div>
          <a href="#" id="celsius-link" className="active">
            °C |
          </a>
          <a href="#" id="fahrenheit-link">
            °F
          </a>
          <ul className="standard-text">
            <li>
              Humidity: <span id="humidity">30</span>%
            </li>
            <li>
              Wind: <span id="wind">25</span> km/h
            </li>
          </ul>
        </h3>
      </div>
      <br />{" "}
      <a
        className="github"
        href="https://github.com/lucy-birkhead/Weather-App-SheCodes"
      >
        Weather App Github Repository
      </a>{" "}
      <p>Coded by Lucy B.</p>
    </div>
  );
}
