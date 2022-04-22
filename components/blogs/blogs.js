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
        <p className='html'>&lt;h2&gt;</p>
        <h2 className='title'>Blogs</h2>
        <p className='html'>&lt;/h2&gt;</p>
        <div className='blogs__section'>
            {count.map((item,i) => {
                return (
                <div key={i} className='blogs__section--card' style={{borderTop:`2px solid ${item.color}`}}>
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
