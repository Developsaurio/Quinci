import React, {Component} from 'react';
import '../assets/css/buttons.css';

class CircularButtons extends Component{
    render(){
        return (
            <React.Fragment>  
                <a
                className="link-btn circular__btn"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </React.Fragment>
        )
    }
}

export default CircularButtons;