import React, { Component } from "react";
import './storefront.css';
import { Link } from "react-router-dom";
import SocialForums from './../socialforums'

const StoreFront = () => {
    return(
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
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
}


export default StoreFront;
