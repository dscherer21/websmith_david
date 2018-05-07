import React, { Component } from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <footer className='container'>
        <div className="text-center navbar navbar-relative-bottom">
            <div className="container-fluid">
              <div className='col-xs-12'>
                <audio controls autoplay='autoplay' loop='loop'>
                  <source src="./../audio/dwarventunnels.mp3" type="audio/mpeg"/>
                  Your browser does not support the audio element.
                </audio>
              </div>
              <h3 className='col-xs-12'>© 2018 Copyright</h3>
            </div>
        </div>
      </footer>
    )
}


export default Footer;
