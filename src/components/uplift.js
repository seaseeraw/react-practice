import React from 'react'
import '../App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Uplift = () => {
  
  const [count, setcount]=useState(2);
  return (
    <div>
        <button className='c' onClick={()=>setcount(count +1)}> <FontAwesomeIcon icon={faPlus} /> </button>
        <button className='c' onClick={()=>setcount(count-1)}>decrease</button>
    </div>
  )
}

export default Uplift;