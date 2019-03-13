import React  from 'react';
import './part2.css';

import Style from './style';




const Carte=({datacarte})=>
{
return(
<div className="row">
{
  datacarte.map((el,i)=>
        <Style key={i} data={el}/>)
}
       
</div>
)
}
export default Carte;