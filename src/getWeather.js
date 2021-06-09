function getWeather() {
  async function weather() {
    try {
      const response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=London&appid=27a1120f4c8eeb5728e136f3eafe2d34',
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      console.log(weatherData);
    } catch (ex) {
      console.log(ex);
    };
  };
  weather();
};

export default getWeather();
