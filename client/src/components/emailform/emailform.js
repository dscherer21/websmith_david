import React, { Component } from "react";
import './emailform.css';
import { Link } from "react-router-dom";
import axios from 'axios'

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    const {name, email, message} = this.state;

    axios.post('/send', {
      name,
      email,
      message
    })

    alert('Caw Caw! You Message is on it\'s way!')
    document.getElementById('form').reset();

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
