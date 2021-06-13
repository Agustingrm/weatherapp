let weatherData = "";

function getWeatherDefault() {
  const defaultCity = document.getElementById("city");
  defaultCity.innerHTML = "Loading...";

  async function weather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=tucuman&appid=27a1120f4c8eeb5728e136f3eafe2d34`,
        { mode: "cors" }
      );
      const weatherData = await response.json();

      const defaultCity = document.getElementById("city");
      defaultCity.innerHTML = weatherData.name;

      const defaultTemp = document.getElementById("temp");
      defaultTemp.innerHTML =
        Math.round((weatherData.main.temp - 273.15) * 100) / 100;

      const defaultFeelsLike = document.getElementById("feelsLike");
      defaultFeelsLike.innerHTML =
        Math.round((weatherData.main.temp - 273.15) * 100) / 100;

      const DefaultClimateCondition =
        document.getElementById("climateCondition");
      DefaultClimateCondition.innerHTML =
        "<strong>Climate Condition:</strong> " + weatherData.weather[0].main;
    } catch (ex) {
      console.log(ex + " Error");
    }
  }
  weather();
}

export { weatherData };
export { getWeatherDefault };
