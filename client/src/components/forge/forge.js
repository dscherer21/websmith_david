import React, { Component } from "react";
import './forge.css';
import { Link } from "react-router-dom";
import SocialForums from './../socialforums'

const Forge = () => {
    return(
      <main className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='panelPlate metallicLettering'>
              <h2 className='macondoFont'>The Forge</h2>
              <p>Welcome to the forge, Gentle Folk! Here is where David hones his skills and shows off his wares. Feel free to test out any Webpage you like by clicking on the Image. Be wary that you don{"'"}t harm the other guests with it{"'"}s well sharpened edges.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {/*<div className='col-xs-12'>*/}
            <div className='panelPlate metallicLettering'>
              {/*Portfolio Works*/}
              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*Hangman Game*/}
                <Link to="https://dscherer21.github.io/Hangman-Game/" target="_blank">
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/matrixwallpaper.jpg" alt="Hangman"/>
                    <h3 className="appLabels">Hangman</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*RPG Game*/}
                <Link to="https://dscherer21.github.io/futurama-rpg-game/" target="_blank">
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/futuramabackground.jpg" alt="RPG Game"/>
                    <h3 className="appLabels">RPG Game</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*Trivia Game*/}
                <Link to="https://dscherer21.github.io/dexter-trivia-game/" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/dexterbackground.jpg" alt="Trivia Game"/>
                    <h3 className="appLabels">Trivia Game</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*Super Hero Gif Widget*/}
                <Link to="https://dscherer21.github.io/super-hero-gif-search-widget/" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/comicbookwallpaper.jpg" alt="Rutgers Info Widget"/>
                    <h3 className="appLabels">Super Hero Widget</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*DateNight*/}
                <Link to="https://dscherer21.github.io/datenight" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/app-image.png" alt="DateNight"/>
                    <h3 className="appLabels">DateNight</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*Bamazon.js*/}
                <Link to="https://github.com/dscherer21/bamazon" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/customerdemo1.png" alt="Bamazon Screenshot"/>
                    <h3 className="appLabels">Bamazon.js</h3>
                  </div>
                </Link>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                {/*Heroes Friend Finder*/}
                <Link to="https://heroesfriendfinder.herokuapp.com/" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/heroes1.jpg" alt="Heroes Friend Finder Screenshot"/>
                    <h3 className="appLabels">Heroes Friend Finder</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        {/*</div>*/}
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
}


export default Forge;
