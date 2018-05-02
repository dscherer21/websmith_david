import React, { Component } from "react";
import './raven.css';
import { Link } from "react-router-dom";
import SocialForums from './../socialforums'
import EmailForm from './../emailform'

const Raven = () => {
    return(
      <main className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='panelPlate metallicLettering'>
              <h2 className='macondoFont'>Messenger Raven</h2>
              <img src='./images/messengerraven.jpg' className='img img-thumbnail' alt='Messenger Raven'/>
              <p>Hark, Heroes! A Messenger Raven approacheth! If you need to relay a message to David, here is the place to do so.</p>
            </div>
          </div>

          <EmailForm/>

        </div>
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
}


export default Raven;
