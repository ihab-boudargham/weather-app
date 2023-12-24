import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faThermometerHalf, faSun, faMoon, faWind, faTint, faTachometerAlt, faCloud, faCloudRain, faQuestion } from '@fortawesome/free-solid-svg-icons';

const WeatherDetails = ({ weatherData, formattedSunriseTime, formattedSunsetTime }) => {
  const weatherCondition = weatherData.list?.[0]?.weather[0]?.main;

  // Define a function to map weather conditions to corresponding Font Awesome icons
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <FontAwesomeIcon icon={faSun} size = "2xl" />;
      case 'Clouds':
        return <FontAwesomeIcon icon={faCloud} size = "2xl" />;
      case 'Rain':
        return <FontAwesomeIcon icon={faCloudRain} size = "2xl" />;
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="content absolute top-[300px] w-screen flex flex-row justify-around">
      <div className="location h-[250px] w-[600px] bg-white bg-opacity-30 rounded-2xl flex flex-col justify-center items-center gap-[30px] text-white">
        <div className="flex items-center">
          <span className='flex flex-row items-center gap-4'> 
            {getWeatherIcon(weatherCondition)} 
            <p className="text-[40px]"> {weatherData.city?.name} </p>
          </span>
        </div>
        <p className="text-[20px]"><FontAwesomeIcon icon={faCalendarAlt} /> {new Date().toLocaleDateString()}</p>
        <p className="text-[20px]"><FontAwesomeIcon icon={faUsers} /> {weatherData.city?.population} </p>
      </div>

      <div className="details h-[250px] w-[600px] bg-white bg-opacity-30 rounded-2xl px-[70px] text-white text-xl pt-[55px]">
        <div className="temp-des flex justify-between right-0">
            <p id="temperature">
            <FontAwesomeIcon icon={faThermometerHalf} /> 
            {weatherData.list?.[0]?.temp?.day && `${weatherData.list?.[0]?.temp?.day} °C`}
            </p>
          <p id="description">
            <FontAwesomeIcon icon={faTachometerAlt} /> {weatherData.list?.[0]?.weather[0]?.main}
            {weatherData.list?.[0]?.weather[0]?.description && `, ${weatherData.list?.[0]?.weather[0]?.description}`}
          </p>
        </div>

        <div className="rise-set flex justify-between py-[36px]">
          <p id="rise"><FontAwesomeIcon icon={faSun} /> {formattedSunriseTime}</p>
          <p id="sunset"><FontAwesomeIcon icon={faMoon} /> {formattedSunsetTime}</p>
        </div>

        <div className="wind-hu-pre flex justify-between flex flex-row">
          <div id="wind"><FontAwesomeIcon icon={faWind} /> {weatherData.list?.[0]?.speed && `${weatherData.list?.[0]?.speed} km/hr`} </div>
          <div id="humidity" className='gap-3'><FontAwesomeIcon icon={faTint} />{weatherData.list?.[0]?.humidity && `${weatherData.list?.[0]?.humidity} %`}</div>
          <div id="pressure"><FontAwesomeIcon icon={faTachometerAlt} /> {weatherData.list?.[0]?.pressure && `${weatherData.list?.[0]?.pressure} m/s N`}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
