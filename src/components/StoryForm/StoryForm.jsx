import React, { Component } from 'react'
import './StoryForm.css';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import { loadReCaptcha } from 'react-recaptcha-google';
import { ReCaptcha } from 'react-recaptcha-google';

export default class StoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      baseUrl: process.env.REACT_APP_SITEURL,
      redirect: false,
      isVerified: false,
      newStory: {
        startupName: '',
        founderName: '',
        industry: '',
        solution: '',
        startDate: '',
        endDate: '',
        failureReason: '',
        detailedStory: '',
        contact: '',
      }
    }
  }

  componentDidMount() {
    loadReCaptcha();
  }

  handleChange = (e) => {
    // Store the name of the property being changed
    let name = e.target.name;
    // Store the value the property will change to (the current input)
    let value = e.target.value;
    this.setState({
      newStory: {
        // Copy the rest of the properties
        ...this.state.newStory,
        // Update only the property that should be changed
        [name]: value
      }
    });
  }

  onSubmit = (e) => {
      // Prevent default refreshing of the page
      e.preventDefault();
      if (this.state.isVerified) {
      // Story all data from the form in storyData
      let storyData = this.state.newStory;
      // Make POST request to API
      fetch(`${this.state.baseUrl}/api/addstory`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(storyData),
      })
      .then(res => res.json())
      .then (data => JSON.stringify(data))
      .catch(err => err.message)
      this.setState({
        redirect: true
      })
    }
    else {
      alert('Please check reCAPTCHA box!');
    }
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newStory: {
        startupName: ' ',
        founderName: ' ',
        industry: ' ',
        solution: ' ',
        startDate: ' ',
        endDate: ' ',
        failureReason: ' ',
        detailedStory: ' ',
        contact: '',
      }
    })
  }

  recaptchaLoaded = () => {
    if (this.captcha) {
      this.captcha.reset();
    }
  }
  verifyCallback = (recaptchaToken) => {
    if(recaptchaToken) {
      fetch(`${this.state.baseUrl}/api/recaptcha`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response: recaptchaToken
        })
      })
      .then((res) => {
        return res.json()
      })
      .then(json => {
        if (json.success) {
          this.setState({
            isVerified: true
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {this.state.redirect ? <Redirect to="/success" /> : null}
            <Form className="mui-form form-wrapper" onSubmit={this.onSubmit} action="/about">
              <h1 className="text-center mb-4">Tell Your Story!</h1>
              <Input
                label="What was your startup's name?"
                name="startupName"
                floatingLabel={true}
                required={true}
                value={this.state.newStory.startupName}
                onChange={this.handleChange}/>
              <Input 
                label="What is your name?" 
                name="founderName" 
                floatingLabel={true} 
                required={true} 
                value={this.state.newStory.founderName} 
                onChange={this.handleChange}/>
              <Input 
                label="What was your startup's industry?" 
                name="industry" 
                floatingLabel={true} 
                required={true}  
                value={this.state.newStory.industry} 
                onChange={this.handleChange}/>
              <Input 
                label="What was your startup's solution?" 
                name="solution" 
                floatingLabel={true} 
                required={true}  
                value={this.state.newStory.solution} 
                onChange={this.handleChange}/>
              <Input 
                label="When did it start?" 
                type="date" 
                name="startDate" 
                required={true}  
                min="1900-01-01"
                max={moment(new Date()).format("YYYY-MM-DD")}
                value={this.state.newStory.startDate} 
                onChange={this.handleChange}/>
              <Input 
                label="When did it end?" 
                type="date" 
                name="endDate" 
                required={true}  
                min="1900-01-01"
                max={moment(new Date()).format("YYYY-MM-DD")}
                value={this.state.newStory.endDate} 
                onChange={this.handleChange}/>
              <Input 
                label="Why did it fail?" 
                name="failureReason" 
                floatingLabel={true} 
                required={true}  
                value={this.state.newStory.failureReason} 
                onChange={this.handleChange}/>
              <Input 
                label="Where can people find a more detailed story? Ex: https://medium.com/" 
                name="detailedStory" 
                floatingLabel={true}  
                value={this.state.newStory.detailedStory} 
                onChange={this.handleChange}/>
              <Input 
                label="Where can people contact you? Ex: Twitter Handle" 
                name="contact" 
                floatingLabel={true} 
                value={this.state.newStory.contact} 
                onChange={this.handleChange}/>
              <ReCaptcha
                ref={(el) => { this.captcha = el; }}
                size="normal"
                render="explicit"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
              <Button 
                variant="raised" 
                color="primary">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
