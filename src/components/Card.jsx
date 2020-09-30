import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className="m-30">
        <button onClick={this.showMenu}>
            <i class="fas fa-flag-usa"></i> EN ▼
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu m-30"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> <i class="fas fa-flag-usa"></i> EN </button>
                <button> <i class="fas fa-flag"></i> ES</button>
                <button> <i class="fab fa-canadian-maple-leaf"></i> Can</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;