import React, { useState } from 'react';
import star from './assets/images/star.svg';
import GrayStar from './assets/images/gray-star.svg';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Buttons from './components/Buttons';
import CircularButtons from './components/CircularButtons';
import SquareButtons from './components/SquareButtons';
import Title from './components/Title';
import Select from './components/select';

const sources = [
  "Friend",
  "Walked by",
  "Magazine",
  "Social Media",
  "Other"
]

function App() {

  const [selectedSource, setSource] = useState(0)
  const [selectedSocial, setSocial] = useState(0)
  const [selectedContact, setContact] = useState(0)
  const [selectedVia, setVia] = useState(0)

  const handleSource = (index) => setSource(index)
  const handleSocial = (index) => setSocial(index)
  const handleContact = (index) => setContact(index)
  const handleVia = (index) => setVia(index)
  

  return (
    <div className="App">
      <div className="container">
        <header className="App-header m-30">
          <section className="component m-30">
            <img src={logo} className="logo" alt="logo" />
            <Select />
            <div className="row">
              <div className="line-hr">
                {" "}
                <hr />
              </div>
              <div>
                <h1 className="title1"> AMBIANCE </h1>
              </div>
              <div className="line-hr">
                {" "}
                <hr />
              </div>
            </div>
            <div className="row">
              <img src={star} className="App-logo" alt="star" />
              <img src={star} className="App-logo" alt="star" />
              <img src={star} className="App-logo" alt="star" />
              <img src={GrayStar} className="App-logo" alt="star" />
              <img src={GrayStar} className="App-logo" alt="star" />
            </div>
          </section>

          <form className="width100" action="/">
            <section className="component mt-30">
              <Title title="HOW DID YOU HEAR ABOUT QUINCE?" />
              <div className="row">
                <div onClick={() => handleSource(0)}>
                  <Buttons
                    text={sources[0]}
                    focused={selectedSource === 0 ? true : false}
                  />
                </div>
                <div onClick={() => handleSource(1)}>
                  <Buttons
                    text={sources[1]}
                    focused={selectedSource === 1 ? true : false}
                  />
                </div>
                <div onClick={() => handleSource(2)}>
                  <Buttons
                    text={sources[2]}
                    focused={selectedSource === 2 ? true : false}
                  />
                </div>
              </div>
              <div className="row">
                <div onClick={() => handleSource(3)}>
                  <Buttons
                    text={sources[3]}
                    focused={selectedSource === 3 ? true : false}
                  />
                </div>
                <div onClick={() => handleSource(4)}>
                  <Buttons
                    text={sources[4]}
                    focused={selectedSource === 4 ? true : false}
                  />
                </div>
              </div>
              <h2 className="title2 mt-30">SELECT WHICH SOCIAL MEDIA?</h2>
              <div className="row">
                <CircularButtons
                  fab="fab fa-facebook-f"
                  color="circular__btn-Blue"
                  focused={selectedSocial === 0 ? true : false}
                  handleSelect={() => handleSocial(0)}
                />
                <CircularButtons
                  fab="fab fa-google"
                  color="circular__btn-Red"
                  focused={selectedSocial === 1 ? true : false}
                  handleSelect={() => handleSocial(1)}
                />
                <CircularButtons
                  fab="fab fa-instagram"
                  color="circular__btn-Yellow"
                  focused={selectedSocial === 2 ? true : false}
                  handleSelect={() => handleSocial(2)}
                />
              </div>
            </section>

            <section className="component mt-30">
              <Title title="JOIN THE QUINCE CROWD!" />
              <h2 className="title2">SIMPLY PROVIDE YOUR NAME AND EMAIL</h2>
              <p className="subtitle">(We promise not spam you.)</p>
              <div className="center">
                <div className="width50">
                  <div className="row">
                    <div className="border-bottom m-x">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="border-bottom m-x">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />{" "}
                    </div>
                  </div>
                  <div className="row border-bottom">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="width100"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="component mt-30">
              <Title title="WOULD YOU LIKE MANAGEMENT TO" />
              <h2 className="title2">CONTACT YOU FOR ANY REASON?</h2>
              <div className="row mt-30">
              <div onClick={() => handleContact(0)}>
                  <Buttons
                    text="Yes"
                    focused={selectedContact === 0 ? true : false}
                  />
                </div>
                <div onClick={() => handleContact(1)}>
                  <Buttons
                    text="No"
                    focused={selectedContact === 1 ? true : false}
                  />
                </div>
              </div>
              <h2 className="title2 mt-30">CONTACT VIA</h2>
              <div className="row">
                <div onClick={() => handleVia(0)}>
                  <Buttons
                    text="Phone"
                    focused={selectedVia === 0 ? true : false}
                  />
                </div>
                <div onClick={() => handleVia(1)}>
                  <Buttons
                    text="Email"
                    focused={selectedVia === 1 ? true : false}
                  />
                </div>
              </div>

              <div className="center mt-30">
                <div className="width50">
                  <div className="row border-bottom">
                    <input
                      type="email"
                      name="email"
                      placeholder="*Email"
                      className="width100"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="border-bottom m-x">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="*First Name"
                        required
                      />
                    </div>
                    <div className="border-bottom m-x">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <p> *Required field</p>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="bg-white width50 mt-30">
                  <input
                    type="text-area"
                    name="text"
                    placeholder="Type your reason here..."
                    className="width100"
                  />
                </div>
              </div>
            </section>

            <h2 className="title2 mt-30">Thank you Brian.</h2>
            <h2 className="title2">
              We have your email and we will be in contact.
            </h2>

            <section className="component mt-30">
              <SquareButtons />
            </section>
          </form>
        </header>
      </div>
    </div>
  );
}

export default App;
