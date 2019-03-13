import React  from 'react';
import StyleImage from './styleimage'
import './part6.css'


const ListeImage=({dataitem2})=>
{
return(
<div className="row">
{
  dataitem2.map((el,i)=>
        <StyleImage key={i} data={el}/>)
}
</div>
)
}
  
  export default ListeImage;