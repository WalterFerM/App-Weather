import React from 'react';
import { FaSearch } from "react-icons/fa"
import Card from "./Card.module.css";

import style from './Search.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function forInputCity (){
    if(typeof onSearch === 'function'){
      const inputCity = document.getElementById("search-input");
      onSearch(inputCity.value);
    }
  }

  return (
  <div className={style.search}>
    <input type="text" name="input-city" id="search-input" placeholder=" Search city..." />
    <button onClick={forInputCity} className={Card.closeBtn}>
      <FaSearch/>
    </button>
  </div>)
};