import React, { Component } from "react";
import './emailform.css';
import { Link } from "react-router-dom";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailName: '',
      emailSenderEmail: '',
      emailMessage: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    alert('Hey, This works!');
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6'>
        <form className='panelPlate metallicLettering' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Name:</label>
            </div>
            <div className='col-xs-12'>
              <input type='text' placeholder='John Doe' name='emailName' onChange={this.handleChange}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Email:</label>
            </div>
            <div className='col-xs-12'>
              <input type='email' placeholder='example@mail.com' name='emailSenderEmail' onChange={this.handleChange}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <label>Message:</label>
            </div>
            <div className='col-xs-12'>
              <textarea rows='8' placeholder='Hello!' name='emailMessage' onChange={this.handleChange}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <button className='btn btn-primary metallicLettering rainbow ' type='submit' value='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default EmailForm;
