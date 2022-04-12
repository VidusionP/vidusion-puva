import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function portfolio() {
  return (
    <div>
        <div>
            <h1>My Portfolio</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eaque suscipit, id veritatis saepe animi non, 
                tempore dolores doloremque odit reprehenderit temporibus ex 
                autem odio expedita dicta voluptate numquam fuga!
            </p>
            <Button className='test' variant="outlined">Contact me</Button>
        </div>
        <ul>
            
        </ul>
    </div>
  )
}
