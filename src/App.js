import React from 'react';
import './App.css';
import data, { Cairns } from './data.js';
import Header from './components/Tittle.jsx'
import SearchBar from './components/SearchBar.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <section>
        
        <div>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
          <Cards
            cities={data}
          />
        </div>
      </section>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
