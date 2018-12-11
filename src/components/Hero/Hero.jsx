import React from 'react'
import './Hero.css';
// import rocket from '../../assets/img/rocket-2.svg';
import grave from '../../assets/img/grave.svg';

export default function Hero(props) {
  return (
    <div className="container my-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-5 offset-md-1 order-2 order-xs-1 order-md-1">
          <h1 className="text-center">Startup Graveyard</h1>
          <p className="text-center">A place where founders of failed startups can tell their story.
            For people thinking about starting a startup, this would be a great place
            to learn from people who've done it and failed.</p>
          <a href='/addstory' className="mui-btn mui-btn--raised mui-btn--primary mui-btn--large text-capitalize btn-hover d-block btn-margin">Add Story</a>
          {/* Will add button back when email list is configured */}
          {/* <a href='google.com' className="mui-btn mui-btn--raised btn-success text-capitalize btn-hover">Join Our Email List</a>           */}
        </div>
        <div className="col-12 col-md-5 order-1 order-xs-2 order-md-2">
          <img id="grave" src={grave} className="img-fluid" alt="Grave"/>
        </div>
      </div>
    </div>
  )
}