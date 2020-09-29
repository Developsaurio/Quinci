import React, {Component} from 'react';
import '../assets/css/buttons.css';

class Buttons extends Component{
    render(){
        return (
            <React.Fragment>  
                <a
                className="link-btn regular__btn"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                    Hellooo</a>
            </React.Fragment>
        )
    }
}

export default Buttons;