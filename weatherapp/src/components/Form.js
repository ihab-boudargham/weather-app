import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faThermometerHalf, faSun, faMoon, faWind, faTint, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Form() {
  return (
    <div className = 'content absolute top-[250px] w-screen flex flex-row justify-around'>
        <div className = 'location h-[250px] w-[600px] bg-white bg-opacity-10 rounded-2xl flex flex-col justify-center items-center gap-[30px] text-white '>
            <p className = 'text-[40px]'> Beirut </p>
            <p className="text-[20px]"><FontAwesomeIcon icon={faCalendarAlt} /> December 23, 2023</p>
            <p className="text-[20px]"><FontAwesomeIcon icon={faUsers} /> Population</p>
        </div>

        <div className="details h-[250px] w-[600px] bg-white bg-opacity-10 rounded-2xl px-[70px] text-white text-xl pt-[55px]">
            <div className="flex justify-between right-0">
            <p id="temperature"><FontAwesomeIcon icon={faThermometerHalf} /> 20.12 C</p>
            <p id="description"><FontAwesomeIcon icon={faTachometerAlt} /> Clouds, few clouds</p>
            </div>

            <div className="flex justify-between py-[36px]">
            <p id="rise"><FontAwesomeIcon icon={faSun} /> 6:35 A.M.</p>
            <p id="sunset"><FontAwesomeIcon icon={faMoon} /> 6:35 P.M.</p>
            </div>

            <div className="flex justify-between">
            <p id="wind"><FontAwesomeIcon icon={faWind} /> 3.85 m/s N</p>
            <p id="humidity"><FontAwesomeIcon icon={faTint} /> 59 %</p>
            <p id="pressure"><FontAwesomeIcon icon={faTachometerAlt} /> 1023 hPa</p>
            </div>
        </div>
  
    </div>
  )
}

export default Form
