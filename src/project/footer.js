import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
    render() { 
        return (
        <div className='foot '>
            <hr className='line'/>
            
            <div className="foot1">
                <p className="foo1">We are leaders in 8 countries: <a href="/">Poland</a>, <a href="/">Turkey</a>, <a href="/">Spain</a>, <a href="/">Italy</a>, <a href="/">Mexico</a>, <a href="/">Brazil</a>, <a href="/">Argentina</a> en <a href="/">Chile</a></p>
            </div>
            <div className="foot2">
                <p className="foo2">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>www.docplanner.com © 2018</p>
            </div>
            

        </div>
)
}
}

export default Footer;