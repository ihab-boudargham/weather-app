import React from 'react'

const SearchInput = ({ city, apiKey, onCityChange, onApiKeyChange, onEnterPress }) => {
    return (
      <div className='search flex absolute top-[150px] left-1/2 transform -translate-x-1/2 gap-10'>
        <input
          className='rounded-3xl h-[45px] w-[300px] border-white cursor-pointer bg-black bg-opacity-20 flex pl-4 text-white inputWithPlaceholderColor'
          type="text"
          placeholder="Enter Location"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          onKeyDown={onEnterPress}
        />
  
        <input
          className='api rounded-3xl h-[45px] w-[300px] border-white cursor-pointer bg-black bg-opacity-20  flex pl-4 text-white ml-2 inputWithPlaceholderColor'
          type="text"
          placeholder="Enter API key"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}

        />
      </div>
    );
  };
  
  export default SearchInput;
