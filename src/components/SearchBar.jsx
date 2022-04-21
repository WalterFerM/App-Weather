import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function forInputCity (){
    if(typeof onSearch === 'function'){
      const inputCity = document.getElementById("search-input");
      onSearch(inputCity.value);
    }
  }

  return (
  <div>
    <input type="text" name="input-city" id="search-input" placeholder="Ciudad..." />
    <button onClick={forInputCity}>Agregar</button>
  </div>)
};