import './styles.css';

const btn = document.querySelector('button');
const inputCity = document.querySelector('input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

async function getData(city) {
  const cityLowerCase = city.toLowerCase();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityLowerCase}/today?unitGroup=metric&key=N6PNPLPPUVGW3LE7FFQMM9LJX&include=current&elements=temp,feelslike,humidity,windspeed`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok!');
    }
    const data = await response.json();
    const currentConditions = data.currentConditions;
    const { temp, feelslike, humidity, windspeed } = currentConditions;
    return { temp, feelslike, humidity, windspeed };
  } catch (error) {
    console.log(error);
  }
}

async function showData() {
  const cityName = inputCity.value;
  const data = await getData(cityName);
  city.textContent = cityName;
  temp.textContent = data.temp;
  feelsLike.textContent = data.feelslike;
  humidity.textContent = data.humidity;
  windSpeed.textContent = data.windspeed;
}

function handleEvents() {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showData();
  });
}

// handleEvents();
