import React from "react"
import './part6.css';
const StyleImage=({data})=>
{
    return (
        
        <div className="col liste11" href="/">
        <div className="imag1">
                            
        <img src={data.picture} alt='/'/>
            <div class="lien row">
                <p className="text-label col-6">{data.title}</p>
                <p className="label col-6">SEE OPENINGS</p>
            </div>
            </div>
        </div>
                        
        
       
             
    )

}
export default StyleImage;