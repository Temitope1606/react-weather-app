import { FaSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const WeatherDetails = ({ weather }) => {
  // an object for storing the default weather details that'll be displayed by default
  const defaultWeather = {
    name: "Osogbo",
    sys: {
      country: "NG",
    },
    weather: [
      {
        main: "Rain",
        description: "moderate rain",
      },
    ],
    main: {
      temp: 34.2,
      temp_min: 33.06,
      temp_max: 36.82,
      pressure: 1021,
      humidity: 60,
    },
    wind: {
      speed: 4.09,
    },
  };

  // Passing a condition for what'll be displayed
  const displayWeather = weather ? weather : defaultWeather;

  const date = new Date();
  console.log(date);

  return (
    <div className="weather-card">
      <h2 className="city-name">
        {displayWeather.name}, {displayWeather.sys.country}
      </h2>

      <div className="weather-icon">
        {displayWeather.weather[0].main === "Clear" ? (
          <FaSun style={{ color: "#ffd700", fontSize: "60px" }} />
        ) : (
          <FaCloud style={{ color: "#fff", fontSize: "60px" }} />
        )}
      </div>

      <div className="day-time">
        <h4>{date.toDateString()}</h4>
      </div>

      <div className="temperature">
        <h3>{displayWeather.main.temp}°C</h3>
      </div>

      <div className="condition">
        <h3>{displayWeather.weather[0].main}</h3>
        <h3>{displayWeather.weather[0].description}</h3>
      </div>

      <div className="other-info">
        <h3>Wind: {displayWeather.wind.speed}</h3>
        <h3>Humidity: {displayWeather.main.humidity}%</h3>
        <h3>Pressure: {displayWeather.main.pressure}hPa</h3>
        <h3>
          Temperature Range: {displayWeather.main.temp_min}°C /{" "}
          {displayWeather.main.temp_max}°C
        </h3>
      </div>
    </div>
  );
};

export default WeatherDetails;
