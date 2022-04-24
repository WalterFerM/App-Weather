import React from 'react';
import Card from './Card';

import style from './Cards.module.css'

export default function Cards({ cities, onRemove }) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={style.cards}>
    {cities.map((city)=>(
      <Card
      key={city.id}
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={()=> {return onRemove(city.id)}}
      />
    ))}
  </div>
  );
};