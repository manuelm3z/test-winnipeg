import React from 'react'
import { kevinToCelcius } from '../tempConverter'

export default ({
  temp,
  icon,
  hour,
  alt
}) => (
  <div>
    <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={alt} />
    {kevinToCelcius(temp)} ºC - {hour} hs
  </div>
)