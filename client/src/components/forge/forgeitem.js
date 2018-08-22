import React, { Component } from "react";
import './forge.css';
import { Link } from "react-router-dom";

class Forgeitem extends Component {
    constructor() {
    super()
    } 
    render() {
    return(

            <div className="col-xs-12 col-sm-12 col-md-12">
            {/*NYT Article Search*/}
                <div className='container quote'>
                    <div className='row'>

                        <Link to="https://nyt-mern-stack.herokuapp.com/" className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src="./images/nytscreenshot.png" alt="NYT Article Search"/>
                            <h3 className="appLabels">ReactJS NYT Search</h3>
                        </Link>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>A Full MERN Stack Application that searches for artciles from "The New York Times" Website, allows you store them in a database, and make comments on them.</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>HTML5, CSS3, JavaScript, NodeJs, Yarn, ES6, Bootstrap 3, JQuery, ExpressJS, MongoDB, ReactJS, Axios, Body-Parser, Dotenv, Morgan, Mongoose, Mongojs, React-Dom, React-Router-Dom, React-Scripts</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}


export default Forgeitem;