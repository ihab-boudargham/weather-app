import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import WeatherDetails from './components/WeatherDetails';


function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city,setCity] = useState("")
  const [formattedSunriseTime, setFormattedSunriseTime] = useState(null);
  const [formattedSunsetTime, setFormattedSunsetTime] = useState(null);
  const [apiKey, setApiKey] = useState("");

  const getWeather = (event) => {
    console.log('getWeather called');
    if (event.key === "Enter") {
      // Use the user-entered API key or fallback to the hardcoded value
      const currentApiKey = apiKey || "d94bcd435b62a031771c35633f9f310a";
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${currentApiKey}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Received data:', data);
          setWeatherData(data);
  
          const sunriseTimestamp = data.list?.[0]?.sunrise;
          const sunsetTimestamp = data.list?.[0]?.sunset;
  
          const formattedSunrise = sunriseTimestamp
            ? new Date(sunriseTimestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : null;
  
          const formattedSunset = sunsetTimestamp
            ? new Date(sunsetTimestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : null;
  
          setFormattedSunriseTime(formattedSunrise);
          setFormattedSunsetTime(formattedSunset);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }
    return (
      <div className="App">
        <div className='relative'>
          <img className='background object-cover' src="/1.jpg" />
  
          <SearchInput
            city={city}
            apiKey={apiKey}
            onCityChange={setCity}
            onApiKeyChange={setApiKey}
            onEnterPress={getWeather}
          />
  
          <WeatherDetails
            weatherData={weatherData}
            formattedSunriseTime={formattedSunriseTime}
            formattedSunsetTime={formattedSunsetTime}
          />
        </div>
      </div>
  );
  }

export default App;
