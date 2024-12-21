// import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  // Fetch Weather
  const apiKey = "989e51a7d15ce7dcd667227e0a598353";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const fetchWeather = async () => {
    if (city.trim() === "") {
      alert("Enter a city name!!");
      return;
    }
    try {
      const response = await fetch(
        `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setWeather(data); // Save the weather data
      // setCity(''); // Clears out input box
    } catch (error) {
      console.log(`Error fetching weather: ${error}`);
    }
  };

  //   useEffect(() => {
  //      fetchWeather()
  //         .then(response => response.json())
  //         .then(data => console.log(data));
  // }, []);

  return (
    <div>
      <Header city={city} setCity={setCity} onSearch={fetchWeather} />
      <WeatherDetails weather={weather} />
    </div>
  );
};

export default App;
