// API key
const key = `ef6483483b0f29aa664e876c0c2ad84a`;
// API
const api = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;
// Icon
const icon = (str) => `http://openweathermap.org/img/wn/${str}@2x.png`;

// Select element
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const tempLocation = document.querySelector(".tempLocation span");
const tempIcon = document.querySelector(".tempIcon");
const tempCurrent = document.querySelector(".tempCurrent");
const tempDescription = document.querySelector(".tempDescription");
const content = document.querySelector(".content");

// Fetch data
const fetchData = async (location) => {
  try {
    const res = await fetch(api(location));
    const data = await res.json();
    displayData(data);
  } catch (err) {
    content.classList.remove("show");
  }
};
fetchData("dhaka");

// Display data
const displayData = (data) => {
  content.classList.add("show");
  tempLocation.textContent = data.name;
  tempIcon.src = icon(data.weather[0].icon);
  tempCurrent.innerHTML = `${data.main.temp}&deg;C`;
  tempDescription.textContent = data.weather[0].main;
};

// Search city
searchBtn.addEventListener("click", () => {
  const searchInputValue = searchInput.value.trim();
  fetchData(searchInputValue);
});
