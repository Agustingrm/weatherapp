const mainFrame = () => {
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "headerDiv");
  content.appendChild(headerDiv);

  const header = document.createElement("header");
  header.innerHTML = "Weather App";
  headerDiv.appendChild(header);

  const searchDiv = document.createElement("div");
  searchDiv.setAttribute("id", "searchDiv");
  content.appendChild(searchDiv);

  const searchBar = document.createElement("input");
  searchBar.setAttribute("id", "searchBar");
  searchBar.setAttribute("placeholder", "Insert City Name Here");
  searchDiv.appendChild(searchBar);

  const searchButton = document.createElement("button");
  searchButton.setAttribute("id", "searchButton");
  searchButton.innerHTML = "Search";
  searchDiv.appendChild(searchButton);

  const celsiusOrFahrenheit = document.createElement("button");
  celsiusOrFahrenheit.setAttribute("id", "celsiusOrFahrenheit");
  celsiusOrFahrenheit.innerHTML = "°C";
  searchDiv.appendChild(celsiusOrFahrenheit);

  const cityNotFound = document.createElement("p");
  cityNotFound.setAttribute("id", "cityNotFound");
  cityNotFound.innerHTML = "City not found, try again";
  content.appendChild(cityNotFound);

  const card = document.createElement("div");
  card.setAttribute("id", "card");
  content.appendChild(card);

  const city = document.createElement("p");
  city.setAttribute("id", "city");
  card.appendChild(city);

  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("id", "tempDiv");
  card.appendChild(tempDiv);

  const temperature = document.createElement("p");
  temperature.setAttribute("id", "temperature");
  temperature.innerHTML = '<strong>Temperature:&nbsp</strong>'
  tempDiv.appendChild(temperature);

  const temp = document.createElement("p");
  temp.setAttribute("id", "temp");
  tempDiv.appendChild(temp);

  const tempScale = document.createElement("p");
  tempScale.setAttribute("id", "tempScale");
  tempScale.innerHTML = '°C'
  tempDiv.appendChild(tempScale);
  
  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.setAttribute("id", "feelsLikeDiv");
  card.appendChild(feelsLikeDiv);

  const feelsLikeName = document.createElement("p");
  feelsLikeName.setAttribute("id", "feelsLikeName");
  feelsLikeName.innerHTML = '<strong>Feels Like:&nbsp</strong>'
  feelsLikeDiv.appendChild(feelsLikeName);

  const feelsLike = document.createElement("p");
  feelsLike.setAttribute("id", "feelsLike");
  feelsLikeDiv.appendChild(feelsLike);

  const feelsLikeScale = document.createElement("p");
  feelsLikeScale.setAttribute("id", "feelsLikeScale");
  feelsLikeScale.innerHTML = '°C'
  feelsLikeDiv.appendChild(feelsLikeScale);

  const climateCondition = document.createElement("p");
  climateCondition.setAttribute("id", "climateCondition");
  climateCondition.innerHTML = "<strong>Climate Condition:</strong>"
  card.appendChild(climateCondition);

};

export default mainFrame;
