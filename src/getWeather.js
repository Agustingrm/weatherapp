let weatherData = "";

function getWeather() {
  const city = document.getElementById("searchBar").value;
  const cityNotFound = document.getElementById('cityNotFound')

  async function weather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27a1120f4c8eeb5728e136f3eafe2d34`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      if (weatherData.message == "city not found") {
        cityNotFound.style.display = 'block'
      } else {
        cityNotFound.style.display = 'none'
        
        const city = document.getElementById("city");
        city.innerHTML = weatherData.name;

        const temp = document.getElementById("temp");
        temp.innerHTML =
          Math.round((weatherData.main.temp - 273.15) * 100) / 100;

        const feelsLike = document.getElementById("feelsLike");
        feelsLike.innerHTML =
          Math.round((weatherData.main.feels_like - 273.15) * 100) / 100;

        //If you search in Fahrenheit this lines fix the temperature
        let scale = document.getElementById("celsiusOrFahrenheit");
        if (scale.innerText == "°F") {
          temp.innerHTML =
            Math.round(((temp.innerText * 9) / 5 + 32) * 100) / 100;
          feelsLike.innerHTML =
            Math.round(((feelsLike.innerText * 9) / 5 + 32) * 100) / 100;
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
