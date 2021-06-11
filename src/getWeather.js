let weatherData = "";

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
        const city = document.getElementById("city");
        city.innerHTML = weatherData.name;

        const celsiusOrFahrenheit = document.getElementById(
          "celsiusOrFahrenheit"
        );
        const temp = document.getElementById("temp");
        if (celsiusOrFahrenheit.innerText == "°C") {
          temp.innerHTML =
            "<strong>Temperature:</strong> " +
            Math.round((weatherData.main.temp - 273.15) * 100) / 100 +
            "°C";
        } else if (celsiusOrFahrenheit.innerText == "°F") {
          temp.innerHTML =
            "<strong>Temperature:</strong> " +
            Math.round(
              ((weatherData.main.temp - 273.15) * (9 / 5) + 32) * 100
            ) /
              100 +
            "°F";
        }

        const feelsLike = document.getElementById("feelsLike");
        if (celsiusOrFahrenheit.innerText == "°C") {
          feelsLike.innerHTML =
            "<strong>Feels Like:</strong> " +
            Math.round((weatherData.main.feels_like - 273.15) * 100) / 100 +
            "°C";
        } else if (celsiusOrFahrenheit.innerText == "°F") {
          feelsLike.innerHTML =
            "<strong>Feels Like:</strong> " +
            Math.round(
              ((weatherData.main.feels_like - 273.15) * (9 / 5) + 32) * 100
            ) /
              100 +
            "°F";
        }

        const climateCondition = document.getElementById("climateCondition");
        climateCondition.innerHTML =
          "<strong>Climate Condition:</strong> " + weatherData.weather[0].main;
      }
    } catch (ex) {
      console.log(ex, "Error");
    }
  }
  weather();
}

export { weatherData };
export { getWeather };
