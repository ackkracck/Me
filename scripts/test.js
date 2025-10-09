const temperatureElement = document.getElementById("temperature");
const weatherDescriptionElement = document.getElementById("description");
const timeElement = document.getElementById("time");

const weatherDescriptions = {
  0: "clear sky",
  1: "mostly clear",
  2: "scattered clouds",
  3: "grey overcast",
  45: "dense fog",
  48: "frosty fog",
  51: "light drizzle",
  53: "steady drizzle",
  55: "heavy drizzle",
  56: "cold drizzle",
  57: "icy drizzle",
  61: "light rain",
  63: "steady rain",
  65: "heavy rain",
  66: "freezing rain",
  67: "icy rain",
  71: "light snow",
  73: "falling snow",
  75: "thick snow",
  77: "snow grains",
  80: "passing showers",
  81: "rain showers",
  82: "strong showers",
  85: "light flurries",
  86: "snow showers",
  95: "loud thunder",
  96: "hail storm",
  99: "severe storm"
};

let weatherUrl1 = `https://api.open-meteo.com/v1/forecast?latitude=-37.814&longitude=144.9633&current=temperature_2m,weather_code&timezone=auto`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl1);
        const data = await response.json();
        
        temperatureElement.textContent = data.current.temperature_2m + '°C';
        weatherDescriptionElement.textContent = weatherDescriptions[data.current.weather_code];
        return data;
    } catch (error) {
        console.error(error);
    }
}

function updateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Australia/Melbourne' };
  timeElement.textContent = now.toLocaleTimeString('en-AU', options);
}

fetchWeather();
updateTime();
setInterval(updateTime, 1000);
setInterval(fetchWeather, 60000);