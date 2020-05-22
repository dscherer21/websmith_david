import React from "react";
import './forge.css';
import SocialForums from './../socialforums'
import Forgeitem from './forgeitem'
import axios from 'axios'

class Forge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  };
  
  componentDidMount(){
    axios.get('/api/projects')
    .then((response) => {
      //console.log(response);
      const data = Array.from(response.data.projects);
      this.setState({
        projects: data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <main className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='panelPlate metallicLettering'>
              <h2 className='macondoFont'>The Forge</h2>
              <img src='./images/winterdwarfblacksmith.jpg' alt='Dwarf Blacksmith' id='dwarf' className='img img-thumbnail'/>
              <p>Welcome to the forge, Gentle Folk! Here is where David hones his skills and shows off his wares. Feel free to test out any Webpage you like by clicking on the Image. Be wary that you don{"'"}t harm the other guests with it{"'"}s well sharpened edges.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='clearfix panelPlate placardText'>
                <h2 className='macondoFont metallicLettering'>David{"'"}s Wares</h2>
                {/*Portfolio Works*/}

                {this.state.projects.map((project, i) => (
                  <Forgeitem
                    projectLink={project.link}
                    imgSrc={project.imageLink}
                    projectTitle={project.title}
                    projectDescription={project.projectDescription}
                    technologiesUsed={project.technologiesUsed}
                    key={i}
                  />
                ))}
              
            </div>
          </div>
        </div>
        <SocialForums/>
        <hr/>
        <hr/>
        <hr/>
      </main>
    )
  }
}


export default Forge;
