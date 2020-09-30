import React, {Component} from 'react';
import '../assets/css/buttons.css';

const Buttons = ({ text, focused }) => (
  <React.Fragment>
    <button className={`regular__btn${focused ? ' focus' : '' }`} type="button">
      {text}
    </button>
  </React.Fragment>
);


export default Buttons;