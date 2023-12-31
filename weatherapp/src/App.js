import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [formattedSunriseTime, setFormattedSunriseTime] = useState(null);
  const [formattedSunsetTime, setFormattedSunsetTime] = useState(null);
  const [apiKey, setApiKey] = useState('');

  const getWeather = async (event) => {
    console.log('getWeather called');

    try {
      if (event.key === 'Enter') {
        // Use the user-entered API key or fallback to the current API key
        const currentApiKey = apiKey || 'd94bcd435b62a031771c35633f9f310a';
        
        console.log('API Key:', currentApiKey); // Log the API key
  
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${currentApiKey}`
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        console.log('Weather data received successfully.');
  
        const data = await response.json();
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

        console.log('Weather data processing complete.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Event handler for the location input
  const handleLocationInput = (value) => {
    setCity(value);
  };

  // Event handler for the API key input
  const handleApiKeyInput = (value) => {
    setApiKey(value);
  };

  return (
    <div className="App">
      <div className='relative'>
        <img className='background object-cover' src="/1.jpg" />

        <SearchInput
          city={city}
          apiKey={apiKey}
          onCityChange={handleLocationInput}
          onApiKeyChange={handleApiKeyInput}
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