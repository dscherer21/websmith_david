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
                <div className='quote'>
                  <p className='metallicLettering'>"As a highly skilled Websmith, I shall craft you a fine webpage made of 'Rare ReactJS Ore', slowly molded together with fine strokes of my 'Mighty NPM Hammer' upon the 'Anvil of HTML!'"  -Websmith David- </p>
                </div>
              </div>
              <div className='col-xs-5 panelPlate'>
                <h2 className='macondoFont metallicLettering'>Ye Olde Websmith</h2>
                <img id='portrait' src='./images/glitterbeard1.jpg' alt='Glitter Beard Portrait'/>
                <h2 className='macondoFont metallicLettering'>Crest of the Websmith Clan</h2>
                <Link to='https://drive.google.com/file/d/1S75LHS0uNnNDV2-0p3zjJEBuayKEKqYz/view?usp=sharing' target='_blank'>
                  <img id='crest' src='./images/websitelogo.png' alt='Website Logo'/>
                </Link>
                <p className='metallicLettering'>If you click on the Crest above, Davids Resume will magicly materialize before your eyes!</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-11 metallicLettering panelPlate'>
                <h2 className='macondoFont'>About David</h2>
                <p>David is 34 years old, and has been married for 4 years. David lives deep within the Magical Forest of Chicago, IL. When he is not forging the deadliest of Webpages, David likes to spend his leisure time watching movies (he prefers action/adventure, sci-fi, and fantasy), TV shows (he is into anime, and enjoys good comedies like Scrubs, Family Guy, and How I Met Your Mother), video games (he used to play World of Warcraft, loves the Legend of Zelda series, and other games as well.), Trading Card Games(primarily Magic: The Gathering), building gaming rigs, and spending time with his wife. David has a wide variety of musical tastes, ranging from rock and hiphop to country and classical. David is very easy-going and has a goofy sense of humor. David will do his best to meet your Websmithing needs!</p>
                <p>If You would like to view a more traditional webpage layout, please click ==> <Link to='https://dscherer21.github.io/bootstrap-portfolio' target='_blank'><strong>HERE</strong></Link>.</p>
              </div>
            </div>
            <div className='row'>
              {/*Social Media Links*/}
              <div className='col-xs-11 panelPlate'>
                <h2 className='metallicLettering macondoFont'>Davids Social Forums</h2>
                <div className='row'>
                  {/*Github*/}
                  <div className='col-xs-3'>
                    <Link to='https://github.com/dscherer21' target='_blank'>
                      <img className='img img-thumbnail quote' src='./images/githubicon.png' alt='Github Icon'/>
                    </Link>
                  </div>
                  {/*Stack Overflow*/}
                  <div className='col-xs-3'>
                    <Link to='https://stackoverflow.com/users/8153526/david-scherer-odell' target='_blank'>
                      <img className='img img-thumbnail quote' src='./images/stackoverflowicon.png' alt='Stack Overflow Icon'/>
                    </Link>
                  </div>
                  {/*LinkedIn*/}
                  <div className='col-xs-3'>
                    <Link to='https://www.linkedin.com/in/david-scherer-odell-9b435850/' target='_blank'>
                      <img className='img img-thumbnail quote' src='./images/linkedinicon.png' alt='LinkedIn Icon'/>
                    </Link>
                  </div>
                  {/*Facebook*/}
                  <div className='col-xs-3'>
                    <Link to='https://www.facebook.com/david.scherer.77' target='_blank'>
                      <img className='img img-thumbnail quote' src='./images/facebookicon.png' alt='Facebook Icon'/>
                    </Link>
                  </div>
                </div>
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
