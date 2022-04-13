import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Script from 'next/script'
import Head from "next/head";


const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];



export default function About() {

    useEffect(() => {

       TagCloud('.content', myTags,{

            // radius in px
            radius: 150,
          
            // animation speed
            // slow, normal, fast
            maxSpeed: 'normal',
            initSpeed: 'normal',
          
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,

          
            // interact with cursor move on mouse out
            keep: true
          
          }); 

      } ,[])
  return (
    <div className='about'>
        <div className='about__para'>
            <h1 className='title'>All About Me</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eaque suscipit, id veritatis saepe animi non, 
                tempore dolores doloremque odit reprehenderit temporibus ex 
                autem odio expedita dicta voluptate numquam fuga!
            </p>
        </div>
        <span className="content">

        </span>
    </div>

  )
}
