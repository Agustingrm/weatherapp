function mainFrame() {
  const searchBar = document.createElement('input');
  searchBar.setAttribute('id', 'searchBar');
  content.appendChild(searchBar);

  const searchButton = document.createElement('button');
  searchButton.setAttribute('id', 'searchButton');
  searchButton.innerHTML = 'Search';
  content.appendChild(searchButton);
};

export default mainFrame();
