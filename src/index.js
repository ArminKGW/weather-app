import './styles.css';

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
    console.log(temp, feelslike, humidity, windspeed);
  } catch (error) {
    console.log(error);
  }
}

getData('turin');
