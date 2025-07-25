async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace this with your real API key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const proxyUrl = "https://corsproxy.io/?"; // CORS Bypass

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(url));
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    document.getElementById("weatherResult").innerHTML = `
      <strong>${data.name}, ${data.sys.country}</strong><br/>
      🌡️ Temp: ${data.main.temp}°C<br/>
      🌤️ Weather: ${data.weather[0].description}<br/>
      💧 Humidity: ${data.main.humidity}%<br/>
      🌬️ Wind: ${data.wind.speed} m/s
    `;
  } catch (error) {
    alert("Error fetching weather data. " + error.message);
  }
}