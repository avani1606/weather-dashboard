const API_KEY="a3c8262719edbbe9b777badf6b485548";
const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click", async function(){
  console.log("button clicked");
  const city=document.getElementById("cityInput").value;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response=await fetch(url);
  const data=await response.json();
  console.log(data);
  document.getElementById("temperature").textContent = data.main.temp + "°C";
document.getElementById("cityName").textContent = data.name;
document.getElementById("feelsLike").textContent = data.main.feelsLike + "°C";
document.getElementById("condition").textContent = data.weather[0].description;
document.getElementById("humidity").textContent = data.main.humidity + "%";
document.getElementById("windSpeed").textContent = data.wind.speed + "mph";
});