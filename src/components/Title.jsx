import React, {Component} from 'react';
import '../assets/css/buttons.css';

class Title extends Component{
    render(){
        const {title}=this.props;
        return (
            <div className="row">
                <div className="line"> <hr /></div>
                <div className="set-width"><h2 className="title3">  {title} </h2></div>
                <div className="line"> <hr /></div>
            </div>
        )
    }
}

export default Title;

