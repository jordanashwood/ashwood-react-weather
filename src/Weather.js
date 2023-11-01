import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {/* onSubmit={handleSubmit} */}
      <form>
        <div className="row navbar navbar-dark bg-light mb-5 p-3 rounded-bottom">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              // onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>
        Charleston,<b>USA</b>
      </h1>
      <ul>
        <li>Tuesday 08:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13 km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
