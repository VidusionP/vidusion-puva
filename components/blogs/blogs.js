import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Blogs() {
    const [count, setCount] = useState([
        {
        title:"WEB DEVELOPMENT",
        desc:"Hypertext markup language (HTML) structures documents such as web pages by...",
        sub:"Fundamentals of HTML5 & CSS3",
        color:'red',
        open: false,
        id: 0
        },
        {
        title:"WEB DEVELOPMENT",
        desc:"Hypertext markup language (HTML) structures documents such as web pages by...",
        sub:"Traffic-Generating SEO Plan",
        color:'red',
        open: false,
        id:1
        },
        {
            title:"WEB DEVELOPMENT",
            desc:"Hypertext markup language (HTML) structures documents such as web pages by...",
            sub:"Web Development Trends in 2022",
            color:'red',
            open: false,
            id:2
        },
        {   
        title:"MARKETING STRATEGIES",
        desc:"Hypertext markup language (HTML) structures documents such as web pages by...",
        sub:"Marketing Strategies for Small Businesses",
        color:'#30aebb',
        open: false,
        id:3
        }
]);
    const [isOpen, setIsOpen ] = useState(false)

    const mouseClick = (e) => {
        // console.log(count)
        let list = e.target.id
        let updatedList = count.map(item => {
            if (item.id == list) {
                return {...item, open : !item.open}
            }
            return item
        })
        setCount(updatedList)
    }
   
  return (
    <div className='blogs'>
        <span className='blogs__bkg'>Blog</span>
        <p className='html'>&lt;h2&gt;</p>
        <h2 className='title'>Blogs</h2>
        <p className='html'>&lt;/h2&gt;</p>
        <div className='blogs__section'>
            {count.map((item,i) => {
                return (
                <div key={i} id={i} onClick={mouseClick} className='blogs__section--card' style={{borderTop:`2px solid ${item.color}`}}>
                    <p id={i} className='blogs__section--card__tle' style={{color:`${item.color}`}}>{item.title}</p>
                    <h3 id={i} className='blogs__section--card__sub'>{item.sub}</h3>
                    <p id={i} className='blogs__section--card__desc'>{item.desc}</p>
                    <span id={i} className={item.open ?'blogs__section--card__overlay mobileOpen1' : 'blogs__section--card__overlay' }>Coming Soon</span>
                </div>
                )
            })}
            
            
        </div>
    </div>
  )
}
