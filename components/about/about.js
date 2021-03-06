import React, {  useState, useEffect, useRef } from 'react';
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



export default function About(props) {

    useEffect(() => {

       TagCloud('.content', myTags,{

            // radius in px
            radius: 120,
          
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
    <div  className='about'>
        <div className='about__para'>
            <p className='html'>&lt;h2&gt;</p>
            
            <h2 className='title'>All About Me</h2>
            <p className='html'>&lt;/h2&gt;</p>
            <p className='html'>&lt;p&gt;</p>
            <div className='about__para--section'>
                <div className='font'>
                    Transitioning from a science background to the techology field,
                    back in 2018, has been the greatest decision Ive ever made.
                    <br/><br/>

                    For the past 5 years, I had many opportunities to work in a vast 
                    spectrum of web technologies, which allowed me acquire a significant
                    amount of experience. Working for companies and aspiring individuals, I met 
                    and learnt from ambitious people.
                    <br/><br/>

                    I currently work remotely with a company, being open for new opportunities.
                    <p className='html'>&lt;/p&gt;</p>
                </div>
                <span className="content">

                </span>
            </div>
            

        </div>
        
    </div>

  )
}
