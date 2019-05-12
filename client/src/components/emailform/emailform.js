import React from "react";
import './emailform.css';
import Recaptcha from 'react-recaptcha';
import axios from 'axios'

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isVerified: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    const {name, email, message} = this.state;
    if (this.state.isVerified) {
      axios.post('/send', {
        name,
        email,
        message
      })

      alert('Caw Caw! Your Message is on its way!')
      document.getElementById('form').reset();
    } else {
      alert('The Raven only responds to humans! Please verify that you are a human and not a SpamGollum!')
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState ({
        isVerified: true
      })
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6'>
        <form id='form' className='panelPlate metallicLettering' onSubmit={this.handleSubmit} method="POST" action='send'>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Name:</label>
            </div>
            <div className='col-xs-12'>
              <input type='text' placeholder='John Doe' name='name' onChange={this.handleChange} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Email:</label>
            </div>
            <div className='col-xs-12'>
              <input type='email' placeholder='example@mail.com' name='email' onChange={this.handleChange} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Message:</label>
            </div>
            <div className='col-xs-12'>
              <textarea rows='8' placeholder='Hello!' name='message' onChange={this.handleChange} required/>
            </div>
          </div>
          <div className='row'>
            {/*reCAPTCHA*/}
            <div className='col-xs-12 text-align-right'>
            <Recaptcha
              sitekey="6Lck5GQUAAAAANI8ocNz9ps76VvuOj1CxX9Sm5Yg"
              verifyCallback={this.verifyCallback}
              render='explicit'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <button className='btn btn-primary metallicLettering rainbow' type='submit' value='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default EmailForm;
