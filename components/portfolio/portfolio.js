import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <div className='portfolio__top'>
            <h1 className='title'>My Portfolio</h1>
            <p className='portfolio__top--para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eaque suscipit, id veritatis saepe animi non, 
                tempore dolores doloremque odit reprehenderit temporibus ex 
                autem odio expedita dicta voluptate numquam fuga!
            </p>
            <Button className='contact__button' variant="outlined">Contact me</Button>
        </div>
        <ul>
            
        </ul>
    </div>
  )
}
