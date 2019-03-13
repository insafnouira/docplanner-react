import React, { Component } from 'react';
import ItemMap from './itemmap';
import './part4.css';


const data3=[
  {
    svg:'https://www.docplanner.com/img/flag.png',
    title:'Leader in 8 countries',
    paragraphe:'Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile',
    item:"item1 col-sm-6 ",

  },
  {
    svg:'https://www.docplanner.com/img/visits.png',
    title:'600 000 appointments',
    paragraphe:'booked last month',
    item:"item2 col-sm-6 ",

  },
  {
    svg:'https://www.docplanner.com/img/patients.png',
    title:'20 million unique patients',
    paragraphe:'visit us every month',
    item:"item3 col-sm-6 ",

  },
  {
    svg:'https://www.docplanner.com/img/doctors.png',
    title:'35 000 active doctors',
    paragraphe:'trust in our solutions',
    item:"item4 col-sm-6 ",

  }
]

class CardBg extends Component {
    render() {
      return (
        <div className="card-bg row"> 
          <div className=" text col-lg-6">
            <h1>The world's <br/>biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p>
          </div>
          <div  className="col-lg-6">
          <ItemMap content={data3} />

          </div>
        </div>
          
          
        
      );
    }
  }
  
  export default CardBg;