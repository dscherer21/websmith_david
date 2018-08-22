import React, { Component } from "react";
import './forge.css';
import { Link } from "react-router-dom";
import SocialForums from './../socialforums'
import Forgeitem from './forgeitem'

const Forge = () => {
    return(
      <main className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='panelPlate metallicLettering'>
              <h2 className='macondoFont'>The Forge</h2>
              <img src='./images/winterdwarfblacksmith.jpg' alt='Dwarf Blacksmith' id='dwarf' className='img img-thumbnail'/>
              <p>Welcome to the forge, Gentle Folk! Here is where David hones his skills and shows off his wares. Feel free to test out any Webpage you like by clicking on the Image. Be wary that you don{"'"}t harm the other guests with it{"'"}s well sharpened edges.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='clearfix panelPlate placardText'>
              <h2 className='macondoFont metallicLettering'>David{"'"}s Wares</h2>
              {/*Portfolio Works*/}
              <Forgeitem/>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*DateNight*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/datenight" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/app-image.png" alt="DateNight"/>
                            <h3 className="appLabels">DateNight</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>This app is intended to help you easily plan your next night out at the movies. DateNight streamlines the process of planning your date by combining 2 processes into 1; picking a movie, theater and showtime and also a restaurant to grab a bite to eat before or after the movie.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, International Showtimes API, Google Maps, Places and Geocodes API, Javascript, and jQuery</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*Bootstrap Portfolio*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/bootstrap-portfolio" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/bootstrapportfolioscreenshot.png" alt="Bootstrap Portfolio Screenshot"/>
                            <h3 className="appLabels">Bootstrap Portfolio</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>This app is my first original portfolio page. It Has a short description about myself and my projects.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, and JavaScript</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*DevTech Scraper*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://devtechscraper.herokuapp.com/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/devtechscreenshot.png" alt="DevTech Scraper Screenshot"/>
                            <h3 className="appLabels">DevTech Scraper</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>An app that scrapes the <Link to='http://www.developer-tech.com' target='_blank'>www.developer-tech.com</Link> website for articles, stores them in MongoDB database, and displays them on a webpage.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, JavaScript, jQuery, Bootstrap 3, Axios, Body-Parser, Cheerio, Dotenv, ExpressJS, Express-Handlebars, Mongojs, Mongoose, Morgan, Nodemon, Request, NodeJS, NPM, and MongoDB</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*The Matrix Hangman*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/Hangman-Game/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/matrixwallpaper.jpg" alt="Hangman"/>
                            <h3 className="appLabels">The Matrix Hangman</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>An app that lets you play a Matrix themed game of "Hangman."</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, JavaScript, and GoogleFonts</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*Futurama RPG*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/futurama-rpg-game/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/futuramabackground.jpg" alt="Futurama RPG"/>
                            <h3 className="appLabels">Futurama RPG</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>A mini RPG game based around the cartoon show "Futurama."</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*Dexter Trivia*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/dexter-trivia-game/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/dexterbackground.jpg" alt="Dexter Trivia"/>
                            <h3 className="appLabels">Dexter Trivia</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>A timed trivia game based around the HBO TV show "Dexter."</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*Super Hero GIF Widget*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://dscherer21.github.io/super-hero-gif-search-widget/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/comicbookwallpaper.jpg" alt="Super Hero GIF  Widget"/>
                            <h3 className="appLabels">Super Hero GIF Widget</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>An app that has some Hero Buttons that, when clicked on, generate GIFs related to that Hero. You can also create your own Hero Button with the "Create Hero Button" button.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*BamazonJS*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://github.com/dscherer21/bamazon" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/customerdemo1.png" alt="BamazonJS Screenshot"/>
                            <h3 className="appLabels">BamazonJS</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>An Amazon Mock up run from the Command Line. Three apps running together: A Customer Side app, A manager app, and an Executive app. This is not a deployed application, however, you can view a YouTube video of me demoing it --{'>'}<Link to='https://youtu.be/x_BvqZW0kIM' target='_blank'>Here</Link>.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>JavaScript, MySQL, NodeJS, NPM, Cli-table, Colors, Dotenv, Inquirer, and Prompt</p>
                        </div>

                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                {/*Heroes Friend Finder*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://heroesfriendfinder.herokuapp.com/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/friendfinderscreenshot.png" alt="Heroes Friend Finder Screenshot"/>
                            <h3 className="appLabels">BamazonJS</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>In this app you will be asked a series of questions. Depending on your answers you will be paired with another person. Your name and answers will stored in the database, and anyone that answeres similarly will be paired with you. There is already 8 people, characters from the hit TV series "Heroes", stored in the database.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, JavaScript, Bootstrap 3, ExpressJS, Body-Parser, Self-made API, JSON, NodeJS, NPM, and Path</p>
                        </div>

                    </div>
                </div>
              </div>
              {/*
                {/*Heroes Friend Finder
                <Link to="https://heroesfriendfinder.herokuapp.com/" target='_blank'>
                  <div className='flip'>
                    <img className='img img-thumbnail' src="./images/friendfinderscreenshot.png" alt="Heroes Friend Finder Screenshot"/>
                    <h3 className="appLabels">Heroes Friend Finder</h3>
                  </div>
                </Link>
              </div>*/}
            </div>
          </div>
        </div>
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
}


export default Forge;
