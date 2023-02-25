import axios from "axios";

// carpeta services
import { API } from "./apiKeys";
import React, { useEffect, useState } from "react";
import { Prinpipal } from "./components/Prinpipal";
import { DiasSemana } from "./components/DiasSemana";
import { Grafica } from "./components/Grafica";
import "./style.scss";
import moment from "moment-timezone";
import lupa from "./assets/icons/lupa.png";
import { translate, translateMes } from "./helpers/translate";
import { icons } from "./helpers/icons";
import sunrise from "./assets/icons/sunrise.svg";
import sunset from "./assets/icons/sunset.svg";
import { Bienvenido } from "./components/Bienvenido";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);

  const handleSubmit = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},es&appid=${API.key}&limit=10`
      )
      .then((res) => {
        setWeather(res.data);
        setShow(true);
        setShow2(false);
      });
  };

  console.log(weather);
  return (
    <>
      <div
        className={
          weather
            ? moment().format("HH:mm") > "07:00" &&
              moment().format("HH:mm") < "21:30"
              ? "dia"
              : "noche"
            : "dia"
        }
      >
        <div className="nav">
          <div>
            <h1 className="nombre"> {weather.city?.name} </h1>
          </div>
          <div className="input d-flex">
            <input
              placeholder="Introduce ciudad"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button onClick={handleSubmit}>
              <img className="lupa" src={lupa} />
            </button>
          </div>
        </div>
        {show2 && <Bienvenido />}
        {weather && (
          <div>
            <div>
              <div className="box-time">
                <p className="hour">{moment().format("HH:mm")}</p>
                <p className="date">{translateMes(weather.list[0].dt)}</p>
              </div>
            </div>
            <div className="cajon1 m-auto">
              <div className="">
                <div className="d-flex justify-content-center pt-3">
                  <p className="grados pt-4 pe-3">
                    {Math.round(weather.list[0].temp.day - 273.15) + " ºC"}
                  </p>
                  <img
                    className="icon"
                    src={icons(weather.list[0].weather[0].icon)}
                  />
                </div>
                <div className="d-flex justify-content-center pt-4">
                  <p className="pe-5">
                    Mínima:{" "}
                    {(weather.list[0].temp.morn - 273.15).toFixed(1) + " ºC"}
                  </p>
                  <p>
                    Máxima:{" "}
                    {(weather.list[0].temp.night - 273.15).toFixed(1) + " ºC"}
                  </p>
                </div>
                <div>
                  <p className="modo">
                    {" "}
                    {translate(weather.list[0].weather[0].description)}
                  </p>
                </div>
              </div>
            </div>
            <div className="box-details-sun">
              <div className="box-details-sun2">
                <img className="sunrise" src={sunrise} alt="sunrise" />
                <span className="sunriseAM">
                  {moment.unix(weather.list[0].sunrise).format("HH:mm")} AM
                </span>
              </div>
              <div className="line"></div>
              <div className="box-details-sun2">
                <span>
                  {moment.unix(weather.list[0].sunset).format("HH:mm")} PM
                </span>
                <img className="sunrise" src={sunset} alt="sunset" />
              </div>
            </div>
          </div>
        )}

        <Prinpipal weather={weather} />
        <DiasSemana weather={weather} />
        {show && <Grafica weather={weather} />}
      </div>
    </>
  );
};
