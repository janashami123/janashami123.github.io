import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';


function Star({stars}) {
    const starRating=Array.from({length:5},(elem,index)=>{
     
   let number= index+0.5;

    
    return (
  
    <span key={index}>
      {
      stars>=index+1 ?
      (<FaStar className='icon'/>)
      :stars>= number ?
      (<FaStarHalfAlt className='icon'/>):(
      <AiOutlineStar className='icon'/>)}
    
   </span>
    );
});
return<div><div className="icon-style">
    {starRating}
    {/* <p>({reviews} customer reviews)</p> */}
    </div></div>
};
export default Star
