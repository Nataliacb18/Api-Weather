import React from 'react'
import moment from 'moment-timezone';
import { translate } from '../helpers/translate';
import { icons } from '../helpers/icons';

export const Prinpipal = ({weather, calcularFecha}) => {
    

   



  return (
    <>
    {weather && 
    <div>
        {/* <p>Fecha:{calcularFecha()}</p>
        <p>Tº mañana: { ((weather.list[0].temp.morn) - 273.15).toFixed(1) + " ºC"}</p>
        <p>Tº noche: { ((weather.list[0].temp.night) - 273.15).toFixed(1) + " ºC"}</p>
        <p>{translate(weather.list[0].weather[0].description)}</p>
        <img src={icons(weather.list[0].weather[0].icon)}/> */}

    </div>}
    </>
  )
}
