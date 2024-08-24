import './styles.css';

const searchBtn = document.querySelector('form > button');
const switchBtn = document.querySelector('.switch');
const inputCity = document.querySelector('input');
const box = document.querySelector('.weather-data');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
let mode = 'C';

function showError(error) {
  city.textContent = error;
  temp.textContent = '';
  feelsLike.textContent = '';
  humidity.textContent = '';
  windSpeed.textContent = '';
}

function getTemp(tempElement, feelsLikeElement) {
  let currentTemp, currentFeelsLike;
  if (mode === 'C') {
    currentTemp = tempElement.textContent.replace('°C', '');
    currentFeelsLike = parseInt(
      feelsLikeElement.textContent.match(/(\d+)/)[0],
      10,
    );
    return { currentTemp, currentFeelsLike };
  } else if (mode === 'F') {
    currentTemp = tempElement.textContent.replace('°F', '');
    currentFeelsLike = parseInt(
      feelsLikeElement.textContent.match(/(\d+)/)[0],
      10,
    );
    return { currentTemp, currentFeelsLike };
  }
}

function switchTemp() {
  let newTemp, newFeelsLike;
  let { currentTemp, currentFeelsLike } = getTemp(temp, feelsLike);
  if (mode === 'C') {
    newTemp = Math.round(Number(currentTemp) * 1.8 + 32);
    newFeelsLike = Math.round(Number(currentFeelsLike) * 1.8 + 32);
    temp.textContent = `${newTemp} °F`;
    feelsLike.textContent = `Feels like: ${newFeelsLike} °F`;
    mode = 'F';
    return;
  } else if (mode === 'F') {
    newTemp = Math.round((Number(currentTemp) - 32) / 1.8);
    newFeelsLike = Math.round((Number(currentFeelsLike) - 32) / 1.8);
    temp.textContent = `${newTemp} °C`;
    feelsLike.textContent = `Feels like: ${newFeelsLike} °C`;
    mode = 'C';
    return;
  }
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
    console.log(data);
    if (!data || !data.currentConditions) {
      throw new Error(`No weather data available for ${city}.`);
    }
    const currentConditions = data.currentConditions;
    const address = data.resolvedAddress;
    let { temp, feelslike, humidity, windspeed } = currentConditions;
    let roundTemp, roundFeelsLike;
    if (mode === 'F') {
      roundTemp = Math.round(temp * 1.8 + 32);
      roundFeelsLike = Math.round(feelslike * 1.8 + 32);
    } else {
      roundTemp = Math.round(temp);
      roundFeelsLike = Math.round(feelslike);
    }
    return { roundTemp, roundFeelsLike, humidity, windspeed, address };
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
  const cityNameFinal = data.address.split(',')[0].trim();
  city.textContent = cityNameFinal;
  if (mode === 'C') {
    temp.textContent = `${data.roundTemp} °C`;
    feelsLike.textContent = `Feels like: ${data.roundFeelsLike} °C`;
  } else if (mode === 'F') {
    temp.textContent = `${data.roundTemp} °F`;
    feelsLike.textContent = `Feels like: ${data.roundFeelsLike} °F`;
  }
  humidity.textContent = `Humidity: ${data.humidity} %`;
  windSpeed.textContent = `Wind Speed: ${data.windspeed} km/h`;
  box.classList.remove('hidden');
}

function handleEvents() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showData();
  });

  switchBtn.addEventListener('click', () => {
    switchTemp();
  });
}

handleEvents();
