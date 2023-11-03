import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo m-md-5">
      <div className="container ms-md-5">
        <div className="row col-12 ms-md-5 ms-3">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row mt-2 mb-4">
            <div className="col-6 d-inline-flex align-items-center">
              <WeatherIcon code={props.data.icon} size={72} />
              <div className="m-2">
                <WeatherTemperature fahrenheit={props.data.temperature} />
              </div>
            </div>
            <div className="col-6 pt-5">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
