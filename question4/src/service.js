const apiKey = '14ab828e942e29a659e07867510ec0ac';
const baseUrl = 'http://api.openweathermap.org/data/2.5/';

const weather = city => `${baseUrl}/weather?q=${city}&APPID=${apiKey}`;

const forecast = city => `${baseUrl}/forecast?q=${city}&APPID=${apiKey}`;

export const getWeather = city => {
  const request = new Request(weather(city));
  return fetch(request)
    .then(response => response.json())
}
  
export const getForecast = city => {
  const request = new Request(forecast(city));
  return fetch(request)
    .then(response => response.json())
}

