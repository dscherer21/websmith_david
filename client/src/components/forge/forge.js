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

                {/*Websmith David*/}
                <Forgeitem
                    projectLink={"https://websmith-david.herokuapp.com/"}
                    imgSrc={"./images/websmithdavidscreenshot.png"}
                    projectTitle={"Websmith David"}
                    projectDescription={"David's Main Portfolio page."}
                    technologiesUsed={"HTML5, CSS3, JavaScript(ES5 and ES6), Bootstrap3, JSX, ReactJS, ExpressJS, NodeJS, Body-Parser, NodeMailer, DOTENV, Concurrently, Nodemon, Axios, React-dom, react-player, react-captcha, react-router-dom, react-scripts, and Google Fonts."}
                />

                {/*ReactJS NYT Search*/}
                <Forgeitem
                    projectLink={"https://nyt-mern-stack.herokuapp.com/"}
                    imgSrc={"./images/nytscreenshot.png"}
                    projectTitle={"ReactJS NYT Search"}
                    projectDescription={"A Full MERN Stack Application that searches for articles from The New York Times Website, allows you to store them in a database, and make comments on them."}
                    technologiesUsed={"HTML5, CSS3, JavaScript(ES5 and ES6), NodeJs, Yarn, ES6, Bootstrap 3, JQuery, ExpressJS, MongoDB, ReactJS, Axios, Body-Parser, Dotenv, Morgan, Mongoose, Mongojs, React-Dom, React-Router-Dom, React-Scripts"}
                />

                {/*Holy Covenant UMC*/}
                <Forgeitem
                    projectLink={"https://www.holycovenantumc.org/"}
                    imgSrc={"./images/hcumcscreenshot.png"}
                    projectTitle={"Holy Covenant UMC"}
                    projectDescription={"David consults with church elders once a month about changes to the site, and helps to implement them."}
                    technologiesUsed={"The site used WordPress in the past, but has since upgraded to Squarespace."}
                />

                {/*DateNight*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/datenight"}
                    imgSrc={"./images/app-image.png"}
                    projectTitle={"DateNight"}
                    projectDescription={'This app is intended to help you easily plan your next night out at the movies. DateNight streamlines the process of planning your date by combining 2 processes into 1; picking a movie, theater and showtime and also a restaurant to grab a bite to eat before or after the movie.'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, International Showtimes API, Google Maps, Places and Geocodes API, Javascript, and jQuery"}
                />

                {/*Bootstrap Portfolio*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/bootstrap-portfolio"}
                    imgSrc={"./images/bootstrapportfolioscreenshot.png"}
                    projectTitle={"Bootstrap Portfolio"}
                    projectDescription={'This app is my first original portfolio page. It Has a short description about myself and my projects.'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, and JavaScript"}
                />

                {/*DevTech Scraper*/}
                <Forgeitem
                    projectLink={"https://devtechscraper.herokuapp.com/"}
                    imgSrc={"./images/devtechscreenshot.png"}
                    projectTitle={"DevTech Scraper"}
                    projectDescription={'An app that scrapes the www.developer-tech.com website for articles, stores them in a MongoDB database, and displays them on a webpage.'}
                    technologiesUsed={"HTML5, CSS3, JavaScript, jQuery, Bootstrap 3, Axios, Body-Parser, Cheerio, Dotenv, ExpressJS, Express-Handlebars, Mongojs, Mongoose, Morgan, Nodemon, Request, NodeJS, NPM, and MongoDB"}
                />

                {/*The Matrix Hangman*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/Hangman-Game/"}
                    imgSrc={"./images/matrixwallpaper.jpg"}
                    projectTitle={"The Matrix Hangman"}
                    projectDescription={'An app that lets you play a Matrix themed game of "Hangman."'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, JavaScript, and GoogleFonts"}
                />

                {/*Futurama RPG*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/futurama-rpg-game/"}
                    imgSrc={"./images/futuramabackground.jpg"}
                    projectTitle={"Futurama RPG"}
                    projectDescription={'A mini RPG(Roleplaying Game) based around the cartoon show "Futurama."'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts"}
                />

                {/*Dexter Trivia*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/dexter-trivia-game/"}
                    imgSrc={"./images/dexterbackground.jpg"}
                    projectTitle={"Dexter Trivia"}
                    projectDescription={'A timed trivia game based around the HBO TV show "Dexter."'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts"}
                />

                {/*Super Hero GIF Widget*/}
                <Forgeitem
                    projectLink={"https://dscherer21.github.io/super-hero-gif-search-widget/"}
                    imgSrc={"./images/comicbookwallpaper.jpg"}
                    projectTitle={"Super Hero GIF Widget"}
                    projectDescription={'An app that has some Hero Buttons that, when clicked on, generate GIFs related to that Hero. You can also create your own Hero Button with the "Create Hero Button" button.'}
                    technologiesUsed={"HTML5, CSS3, Bootstrap 3, JavaScript, jQuery, and GoogleFonts"}
                />

                {/*BamazonJS*/}
                <Forgeitem
                    projectLink={"https://github.com/dscherer21/bamazon"}
                    imgSrc={"./images/customerdemo1.png"}
                    projectTitle={"BamazonJS"}
                    projectDescription={'An Amazon Mock up run from the Command Line. Three apps running together: A Customer Side app, A manager app, and an Executive app. This is not a deployed application, however, you can view a YouTube video of me demoing it on Github.'}
                    technologiesUsed={"JavaScript, MySQL, NodeJS, NPM, Cli-table, Colors, Dotenv, Inquirer, and Prompt"}
                />

                {/*Heroes Friend Finder*/}
                <Forgeitem
                    projectLink={"https://heroesfriendfinder.herokuapp.com/"}
                    imgSrc={"./images/friendfinderscreenshot.png"}
                    projectTitle={"Heroes Friend Finder"}
                    projectDescription={'In this app, you will be asked a series of questions. Depending on your answers, you will be paired with another person. Your name and answers will be stored in the database, and anyone that answers similarly will be paired with you. There is already 8 people, characters from the hit TV series "Heroes", stored in the database.'}
                    technologiesUsed={"HTML5, CSS3, JavaScript, Bootstrap 3, ExpressJS, Body-Parser, Self-made API, JSON, NodeJS, NPM, and Path"}
                />
              
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
