import React, { Component } from "react";
import "../assets/css/select.css";
import { useState } from "react";
import MexicoFlag from '../assets/images/mexico-flag.png'
import UsaFlag from '../assets/images/usa.png'
import JaponFlag from '../assets/images/japon.png'
import Arrow from '../assets/images/arrow.png'

const languages = [
    {
        label: "ES",
        img: MexicoFlag
    },
    {
        label: "EN",
        img: UsaFlag
    },
    {
        label: "JAP",
        img: JaponFlag
    }
]

const Select = () => {
  const [expanded, setExpanded] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);

  const handleOption = () => setExpanded(!expanded);
  const handleSelection = (index) => {
    setIndexSelected(index);
    setExpanded(false);
  };

  return (
    <div className="wrapper">
      <div className="option-wrapper" onClick={handleOption}>
        <div className="language">
          <img src={languages[indexSelected].img} className="flag" />
          <span>{languages[indexSelected].label}</span>
        </div>
        <img src={Arrow} className={`icon-${expanded ? "up" : "down"}`} />
      </div>
      {expanded && (
        <Option indexSelected={indexSelected} handleOption={handleSelection} />
      )}
    </div>
  );
};

const Option = ({indexSelected, handleOption}) => {
    return (
      <React.Fragment>
        {languages.map((l, i) => {
          if (i !== indexSelected) {
            return (
              <div className="option-wrapper" onClick={() => handleOption(i)}>
                <div className="language">
                  <img src={l.img} className="flag" />
                  <span>{l.label}</span>
                </div>
              </div>
            );
          }
        })}
      </React.Fragment>
    );
}

export default Select;

