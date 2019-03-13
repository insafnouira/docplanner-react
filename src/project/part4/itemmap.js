import React from "react"
import StyleItem from './styleitem'
import './item.css'



const ItemMap=({content})=>
{
return(
<div className="row">
{
    content.map((el,i)=>
        <StyleItem key={i} Elements={el}/>)
}
</div>
)
}
export default ItemMap;