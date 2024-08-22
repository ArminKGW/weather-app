import './styles.css';

const btn = document.querySelector('button');
const inputCity = document.querySelector('input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

function showError(error) {
  city.textContent = error;
  temp.textContent = '';
  feelsLike.textContent = '';
  humidity.textContent = '';
  windSpeed.textContent = '';
}

async function getData(city) {
  const cityLowerCase = city.toLowerCase();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityLowerCase}/today?unitGroup=metric&key=N6PNPLPPUVGW3LE7FFQMM9LJX&include=current&elements=temp,feelslike,humidity,windspeed`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error(`No results found. status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.currentConditions) {
      throw new Error(`No weather data available for ${city}.`);
    }
    const currentConditions = data.currentConditions;
    const { temp, feelslike, humidity, windspeed } = currentConditions;
    return { temp, feelslike, humidity, windspeed };
  } catch (error) {
    showError(error.message);
  }
}

async function showData() {
  if (!inputCity.value) return;
  city.textContent = 'Loading...';
  temp.textContent = '';
  feelsLike.textContent = '';
  humidity.textContent = '';
  windSpeed.textContent = '';
  const cityName =
    inputCity.value[0].toUpperCase() + inputCity.value.slice(1).toLowerCase();
  const data = await getData(cityName);
  if (!data) return;
  city.textContent = cityName;
  temp.textContent = `${data.temp} °C`;
  feelsLike.textContent = `Feels like: ${data.feelslike} °C`;
  humidity.textContent = `Humidity: ${data.humidity} %`;
  windSpeed.textContent = `Wind Speed: ${data.windspeed} km/h`;
}

function handleEvents() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showData();
  });
}

handleEvents();
