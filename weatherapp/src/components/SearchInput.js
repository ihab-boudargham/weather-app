import React from 'react'

const SearchInput = ({ city, apiKey, onCityChange, onApiKeyChange, onEnterPress }) => {
    return (
      <div className='flex absolute top-[100px] left-1/2 transform -translate-x-1/2'>
        <input
          className='rounded-3xl h-[45px] w-[300px] bg-white border-white cursor-pointer bg-opacity-10 flex pl-4 text-white'
          type="text"
          placeholder="Enter Location"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          onKeyDown={onEnterPress}
        />
  
        <input
          className='rounded-3xl h-[45px] w-[300px] bg-white border-white cursor-pointer bg-opacity-10 flex pl-4 text-white ml-2'
          type="text"
          placeholder="Enter API key"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchInput;
