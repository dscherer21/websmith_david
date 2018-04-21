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
                    <Link to='/'>Store Counter</Link> | <Link to='#'>Forge/Wares</Link> | <Link to='#'>Messenger Raven</Link>
                  </span></h2>
                </nav>
              </div>
            </div>
          </header>

          <main className='container'>
            <div className='row'>
              <div clasName='col-xs-6'>
                <h2>Welocome!</h2>
                <p className='metallicLettering'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='metallicLettering'><quote>"As a highly skilled Websmith, I shall craft you a fine webpage made of 'Rare ReactJS Ore', slowly molded together with fine strokes of my 'Mighty NPM Hammer' upon the 'Anvil of HTML!'"  -Websmith David- </quote></p>
              </div>
              <div clasName='col-xs-6'>
                <h2>Ye Olde Websmith</h2>
                <img id='portrait' src='./images/glitterbeard.jpg' alt='Glitter Beard Portrait'/>
                <h2>Crest of the Websmith Clan</h2>
                <img id='crest' src='./images/websitelogo.png' alt='Website Logo'/>
              </div>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>

          </main>

          <footer className='container'>
            <div className="text-center navbar navbar-fixed-bottom">
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
