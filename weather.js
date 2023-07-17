const apikey = "30968c7f14d7c81fd26b16fb912bf65e";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function CheckWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    default:
      weatherIcon.src = "images/clear.png";
  }
  document.querySelector(".weather").style.display="block"
}

searchbutton.addEventListener("click", () => {
  CheckWeather(searchbox.value);
});
