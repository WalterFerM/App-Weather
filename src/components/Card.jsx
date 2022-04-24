import React from 'react';

import styles from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {

  function validOnClose(){
    if(typeof onClose === 'function') onClose();
  }

  return (
  <div className={styles.card}>
    <button className={styles.closeBtn} onClick={validOnClose}>X</button>
    <span className={styles.cityName}>{name}</span>
    <div className={styles.temp}>
      <label>Max</label>
      <span>{`${max- 273.15}°`}</span>
    </div>
    <div className={styles.temp}>
      <label>Min</label>
      <span>{`${min- 273.15}°`}</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" className={styles.cardIcon}/>
    
  </div>)
};