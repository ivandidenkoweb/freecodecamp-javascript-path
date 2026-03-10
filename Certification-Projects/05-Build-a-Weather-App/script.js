const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherResult = document.getElementById("weather-result");

function checkValue(val) {
  return val === undefined ? "N/A" : val;
}

async function showWeather(city) {
  const data = await getWeather(city);
  weatherResult.innerHTML = `
    <img id="weather-icon" src="${checkValue(data.weather[0].icon)}" alt="${checkValue(data.weather[0].description)}">
    <div id="main-temperature">Temperature: ${checkValue(data.main.temp)}° C</div>
    <div id="feels-like">Feels like: ${checkValue(data.main.feels_like)}° C</div>
    <div id="humidity">Humidity: ${checkValue(data.main.humidity)}%</div>
    <div id="weather-main">Weather: ${checkValue(data.weather[0].main)}</div>
    <div id="location">Location: ${checkValue(data.name)}</div>
    <div id="wind">Wind: ${checkValue(data.wind.speed)} m/s</div>
    <div id="wind-gust">Wind gust: ${checkValue(data.wind.gust)} m/s</div>
  `;
}

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", () => {
  const selectElement = document.querySelector("select");

  if (selectElement) {
    const city = selectElement.value;
    showWeather(city);
  }
});
