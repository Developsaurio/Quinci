import React from 'react';
import star from './assets/images/star.svg';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Buttons from './components/Buttons';
import CircularButtons from './components/CircularButtons';
import SquareButtons from './components/SquareButtons';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <section className="component">
            <img src={logo} className="logo" alt="logo" />
            <Card />
            <div className="row">
              <div className="line-hr"> <hr /></div>
              <div><h1 className="title1">AMBIANCE</h1></div>
              <div className="line-hr"> <hr /></div>
            </div>
          </section>
        
        
        <img src={star} className="App-logo" alt="star" />
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
        
      </section>
      </header>
      </div>
    </div>
  );
}

export default App;
