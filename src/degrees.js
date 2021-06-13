function degrees() {
  const scale = document.getElementById("celsiusOrFahrenheit");

  scale.addEventListener("click", () => {
    let temp = document.getElementById("temp");
    let tempScale = document.getElementById("tempScale");
    let feelsLike = document.getElementById("feelsLike");
    let feelsLikeScale = document.getElementById("feelsLikeScale");
    if (scale.innerText == "°C") {
      scale.innerHTML = "°F";
      temp.innerHTML = 
        Math.round(((temp.innerText * 9) / 5 + 32) * 100) / 100;
      tempScale.innerHTML = "°F";
      feelsLike.innerHTML =
        Math.round(((feelsLike.innerText * 9) / 5 + 32) * 100) / 100;
      feelsLikeScale.innerHTML = "°F";
    } else if (scale.innerText == "°F") {
      scale.innerHTML = "°C";
      temp.innerHTML =
        Math.round((((temp.innerText - 32) * 5) / 9) * 100) / 100;
      tempScale.innerHTML = "°C";
      feelsLike.innerHTML =
        (Math.round(((feelsLike.innerText - 32) * 5) / 9) * 100) / 100;
      feelsLikeScale.innerHTML = "°C";
    }
  });
}

export default degrees;
