import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Blogs() {
    const [count, setCount] = useState([
        {
        title:"WEB DEVELOPMENT",
        desc:"Hypertext markup language (HTML) structures documents such as web pages by...",
        sub:"Fundamentals of HTML5 & CSS3",
        color:'red'
        }
]);
  return (
    <div className='blogs'>
        <span className='blogs__bkg'>Blog</span>
        <h1 className='title'>Blogs</h1>
        <div className='blogs__section'>
            {count.map((item,i) => {
                return (
                <div className='blogs__section--card' style={{borderTop:`2px solid ${item.color}`}}>
                    <p className='blogs__section--card__tle' style={{color:`${item.color}`}}>{item.title}</p>
                    <h3 className='blogs__section--card__sub'>{item.sub}</h3>
                    <p className='blogs__section--card__desc'>{item.desc}</p>
                </div>
                )
            })}
            
            
        </div>
    </div>
  )
}
