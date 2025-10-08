const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const timeEl = document.getElementById('time');

const lat = -37.8136;
const lon = 144.9631;
const apiKey = 'd1722d62fef4e6195c3d13455a7a3c7d';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-37.8136&lon=144.9631&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionEl.textContent = data.weather[0].description;
  } catch (error) {
    descriptionEl.textContent = 'Failed to load';
    console.error(error);
  }
}

function updateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Australia/Melbourne' };
  timeEl.textContent = now.toLocaleTimeString('en-AU', options);
}

fetchWeather();
updateTime();
setInterval(updateTime, 1000);
setInterval(fetchWeather, 60000);