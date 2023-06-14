import React, { useState, useEffect } from "react";
import "./Styles.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b3a3304ecb2955e0bf25d8d462c060c5`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

        const myNewWeatherInfo = {
              temp,
              pressure,
              humidity,
              weathermood,
              name,
              speed,
              country,
              sunset,
          }
          setTempInfo(myNewWeatherInfo);
          console.log(tempInfo);

    } catch (error) {
        console.log("error");
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            autoFocus
            id="search"
            placeholder="search..."
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* our temp card */}
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
