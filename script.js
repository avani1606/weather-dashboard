const API_KEY="a3c8262719edbbe9b777badf6b485548";
const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click", async function(){
  const city=document.getElementById("cityInput").value;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response=await fetch(url);
  const data=await response.json();
  console.log(data);
});