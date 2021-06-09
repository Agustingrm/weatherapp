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
};

export default mainFrame;
