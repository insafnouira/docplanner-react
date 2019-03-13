import React from "react"
import './part2.css';
const Style=({data})=>
{
    return (
        
        <div className="colored-text1  col-lg-4 carte anim1" style={data.bg}>
            <p className="label1 anim2">{data.title}</p>
            <h3 className="parag anim2">{data.text}</h3>
            
            <select className="option anim2">
                <option>CHOOSE OPTION</option>
                <option>Tunisia</option>
                <option>Argentina</option>
                <option>Malisia</option>
                <option>Brasil</option>
                <option>Australia</option>
            </select>
            
            <div className="img1"> 
               <img className="img1 image1 anim2 " src={data.image} alt="/"/>
            </div>
        </div>  
       
             
    )

}
export default Style;