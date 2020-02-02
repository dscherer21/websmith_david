import React from "react";
import './socialforums.css';

const SocialForums = () => {
    return(
        <div className='row'>
          {/*Social Media Links*/}
          <div className='col-xs-12'>
            <div className='panelPlate'>
              <h2 className='metallicLettering macondoFont'>David{"'"}s Social Forums</h2>
              <div className='row'>
                {/*Github*/}
                <div className='col-xs-3'>
                  <a href='https://github.com/dscherer21' target='_blank'>
                    <img className='img img-thumbnail quote' src='./images/githubicon.png' alt='Github Icon'/>
                  </a>
                </div>
                {/*Stack Overflow*/}
                <div className='col-xs-3'>
                  <a href='https://stackoverflow.com/users/8153526/david-scherer-odell' target='_blank'>
                    <img className='img img-thumbnail quote' src='./images/stackoverflowicon.png' alt='Stack Overflow Icon'/>
                  </a>
                </div>
                {/*LinkedIn*/}
                <div className='col-xs-3'>
                  <a href='https://www.linkedin.com/in/david-scherer-odell-9b435850/' target='_blank'>
                    <img className='img img-thumbnail quote' src='./images/linkedinicon.png' alt='LinkedIn Icon'/>
                  </a>
                </div>
                {/*Facebook*/}
                <div className='col-xs-3'>
                  <a href='https://www.facebook.com/david.scherer.77' target='_blank'>
                    <img className='img img-thumbnail quote' src='./images/facebookicon.png' alt='Facebook Icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default SocialForums;
