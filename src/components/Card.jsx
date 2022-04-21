import React from 'react';

export default function Card({max, min, name, img, onClose}) {

  function validOnClose(){
    if(typeof onClose === 'function') onClose();
  }

  return (
  <div>
    <button onClick={validOnClose}>X</button>
    <span>{name}</span>
    <div>
      <label>Max</label>
      <span>{max}</span>
    </div>
    <div>
      <label>Min</label>
      <span>{min}</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" />
    
  </div>)
};