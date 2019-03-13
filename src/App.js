import React, { Component } from 'react';

import Example from './project/navbar';
import Introduction from './project/part1/part1';
import Carte from './project/part2/part2';
import Liste from './project/part3/part3';
import CardBg from './project/part4/part4';
import Passage from './project/part5/part5';
import ListeImage from './project/part6/part6';
import Footer from './project/footer';
import './App.css';


const items=[
  {
    title:'For patients',
    text:"Find a doctor, book a visit and solve any health-related doubt",
    option :'',
    image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    bg:{backgroundColor:'#00b39b'}
  },
    {
      title:'For doctors',
      text:"Save time managing visits and cut no-shows by half",
      image:'https://www.docplanner.com/img/screen-saas@2x.png',
      bg:{backgroundColor:'#3d83df'}
    }
  
]


const items2=[
  {
    picture:"https://www.docplanner.com/images/warsaw.png",
    title:"Warsaw",
  },
  {
    picture:"https://www.docplanner.com/images/barcelona.png",
    title:"Barcelona",
  },
  {
    picture:"https://www.docplanner.com/images/istanbul.png",
    title:"Istanbul",
  },
  {
    picture:"https://www.docplanner.com/images/rome.png",
    title:"Rome",
  },
  {
    picture:"https://www.docplanner.com/images/mexico-city.png",
    title:"Mexico city",
  },
  {
    picture:"https://www.docplanner.com/images/curitiba.png",
    title:"Curitiba",
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Example/>
        <Introduction/>
        <Carte   datacarte={items} />
        
        <Liste/>
        <CardBg/>
        <Passage/>
        <ListeImage dataitem2={items2}/>
        
        <Footer/>
      </div>
        
        
      
    );
  }
}

export default App;
