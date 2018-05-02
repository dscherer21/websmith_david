import React, { Component } from "react";
import './footer.css';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

const Footer = () => {
    return(
      <footer className='container'>
        <div className="text-center navbar navbar-relative-bottom">
            <div className="container-fluid">
              <ReactPlayer className='col-xs-12' url="https://www.youtube.com/embed/FxchcNLWpH4?autoplay=1" playing='true' loop='true' controls='true' webkit-playsinline="true" playsinline="true" width='60%' height='auto'/>
              <h3 className='col-xs-12'>© 2018 Copyright</h3>
            </div>
        </div>
      </footer>
    )
}


export default Footer;
