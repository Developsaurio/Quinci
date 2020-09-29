import React from 'react';
import star from './assets/images/star.svg';
import './assets/css/App.css';
import Buttons from './components/Buttons';
import CircularButtons from './components/CircularButtons';
import SquareButtons from './components/SquareButtons';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={star} className="App-logo" alt="star" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="component">
        <Buttons />
      </section>
      <section className="component">
        <CircularButtons />
      </section>

      <section className="component">
        <SquareButtons />
      </section>

      <section className="component">
        <Card />
      </section>
      </header>
    </div>
  );
}

export default App;
