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
              <p>Welcome to the forge, Gentle Folk! Here is where David hones his skills and shows off his wares. Feel free to test out any Webpage you like by clicking on the Image. Be wary that you dont harm the other guests with its well sharpened edges.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='panelPlate'>
              Portfolio Placeholder
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
