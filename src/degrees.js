import { getWeather } from "./getWeather";

function degrees() {
  const scale = document.getElementById("celsiusOrFahrenheit");

  scale.addEventListener("click", () => {
    console.log("algo");
    if (scale.innerText == "°C") {
      scale.innerHTML = "°F";
      getWeather();
    } else if (scale.innerText == "°F") {
      scale.innerHTML = "°C";
      getWeather();
    }
  });
}

export default degrees;
