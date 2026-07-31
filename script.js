const API_KEY = "a3c8262719edbbe9b777badf6b485548"; // keep your actual key here
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async function () {
  const city = document.getElementById("cityInput").value;

  const loading = document.getElementById("loading");
  const errorMsg = document.getElementById("errorMsg");

  loading.classList.remove("hidden");
  errorMsg.classList.add("hidden");

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("temperature").textContent = data.main.temp + "°C";
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("feelsLike").textContent = data.main.feels_like + "°C";
    document.getElementById("condition").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("windSpeed").textContent = data.wind.speed + "mph";
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    errorMsg.classList.remove("hidden");
  }

  loading.classList.add("hidden");
});