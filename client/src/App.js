import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <header className='container'>
          <div className='row'>
            <div className='col-xs-6'>
              <h1><span className='macondoFont'>Websmith David</span></h1>
            </div>
            <div className='col-xs-6'>
              <nav>
                <h3><span className='macondoFont'>
                  <Link>Front Counter</Link> | <Link>Forge/Wares</Link> | <Link>Messenger Raven</Link>
                </span></h3>
              </nav>
            </div>
            <div className='row text-center'>
              <iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197093602&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
          </div>
        </header>

        <main>

        </main>

        <footer>

        </footer>
        </Router>
      </div>
    );
  }
}

export default App;
