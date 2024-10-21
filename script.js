const apiKey = 'e85735a594ad8bfb20c81c4487656b2f';
const locationInput = document.getElementById('location');
const fetchWeatherButton = document.getElementById('fetch-weather');
const weatherDataDiv = document.getElementById('weather-data');

fetchWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeatherData(location);
    }
});

function fetchWeatherData(location) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=e85735a594ad8bfb20c81c4487656b2f";
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error(error));
}

function displayWeatherData(data) {
    const weatherDataHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather Conditions: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherDataDiv.innerHTML = weatherDataHTML;
}
