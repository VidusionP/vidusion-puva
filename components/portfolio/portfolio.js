import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <div className='portfolio__top'>
            <p className='html'>&lt;h2&gt;</p>
            <h2 className='title'>My Portfolio</h2>
            <p className='html'>&lt;/h2&gt;</p>
            <p className='html'>&lt;p&gt;</p>
            <p className='portfolio__top--para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eaque suscipit, id veritatis saepe animi non, 
                tempore dolores doloremque odit reprehenderit temporibus ex 
                autem odio expedita dicta voluptate numquam fuga!
            </p>
            <p className='html'>&lt;/p&gt;</p>
            <Button className='contact__button' variant="outlined">Contact me</Button>
        </div>
        {/* <div className='portfolio__work'>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
        </div> */}
    </div>
  )
}
