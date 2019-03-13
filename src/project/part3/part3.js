import React, { Component } from 'react';
import './part3.css';




class Liste extends Component {
    render() {
      return (
        <div className="row listtt">
            
            <div className="t1 col-lg-4">
                <p>
                We are a global company 
                with local culture
                </p>
            </div>
            <div className="t2 col-lg-7">
                <a href="www.docplanner.com" className="list" > 
                <img  className='log' src='https://www.docplanner.com/img/sygnet.png' alt='.'/>
                <p className="link">ZnanyLeKarz</p> 
                </a>
                <a href="www.docplanner.com" className="list" > 
                <img  className='log' src='https://www.docplanner.com/img/sygnet.png' alt='.'/>
                <p className="link">Doctolalia</p> 
                </a>
                <a href="www.docplanner.com"  className="list" > 
                <img  className='log' src='https://www.docplanner.com/img/sygnet.png' alt='.'/>
                <p className="link">MioDottor</p> 
                </a>
                <a  href="www.docplanner.com" className="list" > 
                <img  className='log' src='https://www.docplanner.com/img/sygnet.png' alt='.'/>
                <p className="link">DoctorTakvimi</p> 
                </a>
                
                <a  href="www.docplanner.com" className="list" > 
                <img  className='log' src='https://www.docplanner.com/img/sygnet.png' alt='.'/>
                <p className="link">ZnamyLekar</p> 
                </a>
                
            </div>
           
           
        </div>
)
}
}
export default Liste;
