import React, {Component} from 'react';
import '../assets/css/buttons.css';

const Buttons = ({validated, response}) => {

    validated = true

    response = {
        firstName: "Ana",
        social: "Facebook"
    }

    const handleSubmit = () => {
        validated ? 
        alert(`I will send this to the API: \n ${JSON.stringify(response)}`) :
        alert("You need to answer all the form")
    }

        return (
          <React.Fragment>
            <a className="link-btn square__btn" onClick={handleSubmit}>
              TOUCH WHEN FINISHED
            </a>
          </React.Fragment>
        );

}

export default Buttons;