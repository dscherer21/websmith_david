import React, { Component } from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
      <header className='container'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <div className='col-xs-6'>
              <Link to='/'>
                <img className='img img-thumbnail logo' src='./images/websitelogo.png' alt='Website Logo'/>
              </Link>
            </div>
            <div className='col-md-6 col-xs-12'>
              <h1><span className='macondoFont metallicLettering'>Websmith David</span></h1>
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <nav>
              <h2><span className='macondoFont metallicLettering'>
                <Link to='/'>Store Front</Link> | <Link to='/forge'>Forge/Wares</Link> | <Link to='/raven'>Messenger Raven</Link>
              </span></h2>
            </nav>
          </div>
        </div>
      </header>
    )
}


export default Header;
