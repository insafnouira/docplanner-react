import React, { Component } from 'react';


import './part1.css';



class Introduction extends Component {
  render() {
    return (
      <div className="intro container">
         <img  className='logo-1' src='https://www.docplanner.com/img/sygnet.png' alt='logo'/> 
         <h1>Making the healthcare experience more human</h1>
        <div className='row text' >
            <p className='col-lg-6'>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
            <p className='col-lg-6'>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
        </div>
        
      </div>
        
        
      
    );
  }
}

export default Introduction;