import React, { Component } from "react";
import './raven.css';
import { Link } from "react-router-dom";
import SocialForums from './../socialforums'

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
        {/*</div>*/}
        {/*<div className='row'>*/}
          <div className='col-xs-12 col-md-6'>
            <form className='panelPlate metallicLettering'>
              <div className='row'>
                <div className='col-xs-12'>
                  <label>Name:</label>
                </div>
                <div className='col-xs-12'>
                  <input type='text' placeholder='John Doe'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>
                  <label>Email:</label>
                </div>
                <div className='col-xs-12'>
                  <input type='email' placeholder='example@mail.com'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>
                  <label>Message:</label>
                </div>
                <div className='col-xs-12'>
                  <textarea rows='8' placeholder='Hello!'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>
                  <button className='btn btn-primary metallicLettering rainbow'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
}


export default Raven;
