import React, {Component} from 'react';
import '../assets/css/buttons.css';

const CircularButtons = ({ fab, color, focused, handleSelect }) => (
  <React.Fragment>
    <button
      type="button"
      className={`${color} ${focused ? `${color}-focus` : ""}`}
      onClick={handleSelect}
    >
      <i className={fab}></i>
    </button>
  </React.Fragment>
);

export default CircularButtons;