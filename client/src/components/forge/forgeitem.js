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
                <Link to="https://nyt-mern-stack.herokuapp.com/" target="_blank">
                    <div className='container'>
                    <div className='row quote'>
                        <div className='flip col-xs-12 col-sm-12 col-md-4'>
                            <img className='img img-thumbnail' src="./images/nytscreenshot.png" alt="NYT Article Search"/>
                            <h3 className="appLabels">ReactJS NYT Search2</h3>
                        </div>
                        <div className='flip col-xs-12 col-sm-12 col-md-4'>
                            <h3>Description:</h3>
                            <p>A Full MERN Stack Application that searches for artciles from "The New York Times" Website, allows you store them in a database, and make comments on them.</p>
                        </div>
                        <div className='flip col-xs-12 col-sm-12 col-md-4'>
                            <h3>Technologies Used:</h3>
                            <p>HTML5, CSS3, JavaScript, NodeJs, Yarn, ES6, Bootstrap 3, JQuery, ExpressJS, MongoDB, ReactJS, Axios, Body-Parser, dotenv, morgan, mongoose, mongojs, react-dom, react-router-dom, react-scripts</p>
                        </div>
                    </div>
                    </div>
                </Link>
            </div>

        )
    }
}


export default Forgeitem;