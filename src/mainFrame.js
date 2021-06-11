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

  const card = document.createElement("div");
  card.setAttribute("id", "card");
  content.appendChild(card);

  const city = document.createElement("p");
  city.setAttribute("id", "city");
  card.appendChild(city);

  const temp = document.createElement("p");
  temp.setAttribute("id", "temp");
  card.appendChild(temp);
  
  const feelsLike = document.createElement("p");
  feelsLike.setAttribute("id", "feelsLike");
  card.appendChild(feelsLike);

  const climateCondition = document.createElement("p");
  climateCondition.setAttribute("id", "climateCondition");
  card.appendChild(climateCondition);

};

export default mainFrame;
