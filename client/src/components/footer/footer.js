import React, { Component } from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <footer className='container'>
        <div className="text-center navbar navbar-relative-bottom">
            <div className="container-fluid">
              <iframe src="https://www.youtube.com/embed/FxchcNLWpH4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" webkit-playsinline></iframe>
              <h3>© 2018 Copyright</h3>
            </div>
        </div>
      </footer>
    )
}


export default Footer;
