import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import header from '../../public/Head.png'
import down from '../../public/arrowdown.png'
import Button from '@mui/material/Button';
import V from '../../public/V.png'


export default function Hero() {
  return (
    <div className='hero'>
        <p className='html'>&lt;body&gt;</p>
        <p className='html'>&lt;img</p>
        <div className='hero__image'> 
            <Image src={header} priority={true} style={{borderRadius:'50%'}}/>
        </div>
        <p className='html1'>/&gt;</p>
        <p className='html'>&lt;h1&gt;</p>
        <div className='hero__title'>
            <p className='hero__title--line'>Hi,</p>
            <p className='hero__title--line'>I&apos;m  
            <div className='hero__title--img'>
                <Image priority={true} src={V}/>
            </div>idu,</p>
            <p className='hero__title--line'>Web Developer</p>
        </div>
        <p className='html1'>&lt;/h1&gt;</p>
        <p className='html'>&lt;p&gt;</p>
        <p>FRONT END DEVELOPER</p>
        <p className='html1'>&lt;/p&gt;</p>
        <Button className='test' variant="outlined">Contact me</Button>
        <div className='hero__bot'>
            <div className='hero__bot--scroll'>Scroll Down 
                <Image src={down} priority={true}/>
            </div>
            <div className='hero__bot--mid'>
                <Image src={down} priority={true}/>
            </div>
            <div className='hero__bot--scroll side'>Scroll Down 
                <Image src={down} priority={true}/>
            </div>
        </div>
    </div>
  )
}
