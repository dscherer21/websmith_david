import React, { Component } from "react";
import './forge.css';
//import { Link } from "react-router-dom";

class Forgeitem extends Component {

    render() {
        return(

            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className='container quote'>
                    <div className='row'>
                        <a href={this.props.projectLink} className='flip col-xs-12 col-sm-12 col-md-4' target="_blank">
                            <img className='img img-thumbnail' src={this.props.imgSrc} alt={this.props.projectTitle}/>
                            <h3 className="appLabels">{this.props.projectTitle}</h3>
                        </a>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Description:</h2>
                            <p>{this.props.projectDescription}</p>
                        </div>
                        
                        <div className='col-xs-12 col-sm-12 col-md-4'>
                            <h2>Technologies Used:</h2>
                            <p>{this.props.technologiesUsed}</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}


export default Forgeitem;