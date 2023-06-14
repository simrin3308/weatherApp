import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 1000);
  return () => {
    clearInterval(interval);
  };
}, []);

  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Snow":
          setWeatherState("wi-snow");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

 

  return (
    <>
      {/* our temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperture">
            <span id="temp">{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name} {country}
            </div>
          </div>
        </div>

        <div className="date">
          {new Date().toLocaleString()}
          
        </div>

        {/* 4 column section */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>{" "}
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
