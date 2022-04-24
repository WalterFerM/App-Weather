import React, { useState } from 'react';
import './App.css';
// import data, { Cairns } from './data.js';
import Header from './components/Tittle.jsx'
import SearchBar from './components/SearchBar.jsx';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx'
// import { useState } from 'react/cjs/react.production.min';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [cities, setCities] = useState([]);

  function handleAddCity (city) {
    setCities((prevCities) => {
      return [city, ...prevCities]
    })
  };

  function handleRemoveCity (cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id;
      })
    })
  };

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          handleAddCity(city);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        onSearch={onSearch}
      />
      <section>
        <div>
          {/* <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          /> */}
          <Cards
            cities={cities} onRemove={handleRemoveCity}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
