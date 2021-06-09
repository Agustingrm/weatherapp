function getWeather() {
  const city = document.getElementById("searchBar").value;

  async function weather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27a1120f4c8eeb5728e136f3eafe2d34`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      if (weatherData.message == "city not found") {
        console.log("City not found");
      } else {
        console.log(weatherData.name);
        console.log(weatherData.main.temp);
        console.log(weatherData.main.feels_like);
        console.log(weatherData.weather[0].main);
        console.log(weatherData);
      }
    } catch (ex) {
      console.log(ex);
      console.log("es el catch");
    }
  }
  weather();
}

export { getWeather };
