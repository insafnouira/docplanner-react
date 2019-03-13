import React from "react";

const StyleItem=({Elements})=>
{
    return (
         <div className={Elements.item} >
                <img className="log-class animm" src={Elements.svg} alt="/"/>
                <h4 className="head1 animm">{Elements.title}</h4>
                <p className="par1 animm">{Elements.paragraphe}</p>
         </div> 
         
    )

}
export default StyleItem;