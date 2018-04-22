import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App text-center">
          <header className='container'>
            <div className='row'>
              <div className='col-xs-6'>
                <div className='col-xs-6'>
                  <Link to='/'>
                    <img className='img img-thumbnail logo' src='./images/websitelogo.png' alt='Website Logo'/>
                  </Link>
                </div>
                <div className='col-xs-6'>
                  <h1><span className='macondoFont metallicLettering'>Websmith David</span></h1>
                </div>
              </div>
              <div className='col-xs-6'>
                <nav>
                  <h2><span className='macondoFont metallicLettering'>
                    <Link to='/'>Store Front</Link> | <Link to='#'>Forge/Wares</Link> | <Link to='#'>Messenger Raven</Link>
                  </span></h2>
                </nav>
              </div>
            </div>
          </header>

          <main className='container'>
            <div className='row'>
              <div className='col-xs-6 panelPlate'>
                <h2 className='macondoFont metallicLettering'>Welocome!</h2>
                <p className='metallicLettering'>David is so glad that you are able to visit his forge today, Gallant Hero! That is David in the portrait. Behold, his mighty Websmith Beard! If you are interested in learning more about David, please stay here in the "Store Front" and scroll down and I shall tell you of his fervor. If you are interested in Davids past projects, please click on "Forge/Wares", and I will give you a guided tour of the forge. If you would like to relay a message to David, please call a "Messenger Raven" to do so.</p>
                <div id='quote'>
                  <p className='metallicLettering'>"As a highly skilled Websmith, I shall craft you a fine webpage made of 'Rare ReactJS Ore', slowly molded together with fine strokes of my 'Mighty NPM Hammer' upon the 'Anvil of HTML!'"  -Websmith David- </p>
                </div>
              </div>
              <div className='col-xs-5 panelPlate'>
                <h2 className='macondoFont metallicLettering'>Ye Olde Websmith</h2>
                <img id='portrait' src='./images/glitterbeard1.jpg' alt='Glitter Beard Portrait'/>
                <h2 className='macondoFont metallicLettering'>Crest of the Websmith Clan</h2>
                <img id='crest' src='./images/websitelogo.png' alt='Website Logo'/>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 metallicLettering panelPlate'>
                <h2 className='macondoFont'>About David</h2>
                <p>blah blah blah blah blah blah blah</p>
              </div>
            </div>
            <hr/>
            <hr/>
            <hr/>

          </main>

          <footer className='container'>
            <div className="text-center navbar navbar-relative-bottom">
                <div className="container-fluid">
                  <iframe width="40%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197093602&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  <h3>© 2018 Copyright</h3>
                </div>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
