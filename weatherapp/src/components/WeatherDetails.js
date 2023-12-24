import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faThermometerHalf, faSun, faMoon, faWind, faTint, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherDetails = ({ weatherData, formattedSunriseTime, formattedSunsetTime }) => {
  return (
    <div className="content absolute top-[250px] w-screen flex flex-row justify-around">
      <div className="location h-[250px] w-[600px] bg-white bg-opacity-10 rounded-2xl flex flex-col justify-center items-center gap-[30px] text-white">
        <p className="text-[40px]"> {weatherData.city?.name} </p>
        <p className="text-[20px]"><FontAwesomeIcon icon={faCalendarAlt} /> December 23, 2023</p>
        <p className="text-[20px]"><FontAwesomeIcon icon={faUsers} /> {weatherData.city?.population} </p>
      </div>

      <div className="details h-[250px] w-[600px] bg-white bg-opacity-10 rounded-2xl px-[70px] text-white text-xl pt-[55px]">
        <div className="flex justify-between right-0">
          <p id="temperature"><FontAwesomeIcon icon={faThermometerHalf} /> {weatherData.list?.[0]?.temp?.day && `${weatherData.list?.[0]?.temp?.day} °C`} </p>
          <p id="description">
            <FontAwesomeIcon icon={faTachometerAlt} /> {weatherData.list?.[0]?.weather[0]?.main}
            {weatherData.list?.[0]?.weather[0]?.description && `, ${weatherData.list?.[0]?.weather[0]?.description}`}
          </p>
        </div>

        <div className="flex justify-between py-[36px]">
          <p id="rise"><FontAwesomeIcon icon={faSun} /> {formattedSunriseTime}</p>
          <p id="sunset"><FontAwesomeIcon icon={faMoon} /> {formattedSunsetTime}</p>
        </div>

        <div className="flex justify-between">
          <p id="wind"><FontAwesomeIcon icon={faWind} /> {weatherData.list?.[0]?.speed && `${weatherData.list?.[0]?.speed} km/hr`} </p>
          <p id="humidity" className='gap-3'><FontAwesomeIcon icon={faTint} />{weatherData.list?.[0]?.humidity && `${weatherData.list?.[0]?.humidity} %`}</p>
          <p id="pressure"><FontAwesomeIcon icon={faTachometerAlt} /> {weatherData.list?.[0]?.pressure && `${weatherData.list?.[0]?.pressure} m/s N`}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
