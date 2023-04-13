import searchIcon from "./../../images/icon-search.svg" ;
import './search.css';
import axios from 'axios';
import { useState } from "react";
import { setWordData } from './../../redux/toolkitSlice'
import { useDispatch } from 'react-redux';

export const SearchBar = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const searchWord = async (word) => {
      try {
          const res = await axios.get(`${baseUrl}${word}`);
          dispatch(setWordData(res.data));
      } catch (err) {
          if (axios.isAxiosError(err)) {
            return { error: err.response?.status };
          }
      }
      return [];
    };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchWord(inputValue);
    }
  };

  const handleSearch = () => {
    searchWord(inputValue);
  }

  return (
    <div className="search-bar">
        <input id="search" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <img src={searchIcon} alt="search" className="search-icon" onClick={handleSearch} />
    </div>
  );
};