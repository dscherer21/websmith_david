import React, { Component } from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <footer className='container'>
        <div className="text-center navbar navbar-relative-bottom">
            <div className="container-fluid">
              <iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197093602&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
              <h3>© 2018 Copyright</h3>
            </div>
        </div>
      </footer>
    )
}


export default Footer;
