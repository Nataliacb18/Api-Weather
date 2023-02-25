import React from "react";
import moment from 'moment-timezone';
import { translateDias } from "../helpers/translate";
import { icons } from "../helpers/icons";
import humidity from "../assets/icons/humidity.png"
import wind from "../assets/icons/wind.svg"
import temp from "../assets/icons/temp.png"

export const DiasSemana = ({ weather }) => {




 return (
    <div className="">
      <div className="week">
        {weather &&
          weather.list.map((elem, index) => {
            return (
              <div className="box-week-detail" key={index}>
                <div>
                <p className="pDay">{translateDias(elem.dt)}</p>
                <img
                  src={icons(elem.weather[0].icon)}
                />
                </div>
                <div className="box-humidity">
                  <img className="humidity" src={wind} alt="wind" />
                  <span className="me-3">{Math.round(elem.speed)} m/s</span>
                </div>
                <div className="box-humidity">
                  <img
                    className="humidity humidity2"
                    src={humidity}
                    alt="humidity"
                  />
                  <span>{Math.round(elem.humidity)}%</span>
                </div>
                <div className="box-humidity">
                  <img
                    className="humidity humidity3"
                    src={temp}
                    alt="humidity"
                  />
                  <span className="tempMaxMix">
                 
                    {Math.round(elem.temp.morn - 273.15)}º / {Math.round(elem.temp.night - 273.15)}º
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
