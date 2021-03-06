import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import header from '../../public/Head.png'
import down from '../../public/arrowdown.png'
import Button from '@mui/material/Button';
import V from '../../public/V.png'
import mid from '../../public/heroDesign.png'

export default function Hero(props) {
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
            <span className='hero__title--line'>H</span>
            <span className='hero__title--line'>i</span>
            <span className='hero__title--line'>,</span><br/>
            <div>
                <span className='hero__title--line'>I</span>
                <span className='hero__title--line'>&apos;</span>
                <span className='hero__title--line'>m</span>  
                <span className='hero__title--img'>
                    <Image priority={true} src={V}/>
                </span>
                <span className='hero__title--line'>i</span>  
                <span className='hero__title--line'>d</span>  
                <span className='hero__title--line'>u</span><br/>
            </div>
            
            <span className='hero__title--line'>w</span>  
            <span className='hero__title--line'>e</span>  
            <span className='hero__title--line'>b</span> &nbsp; 
            <span className='hero__title--line'>d</span>  
            <span className='hero__title--line'>e</span>  
            <span className='hero__title--line'>v</span>  
            <span className='hero__title--line'>e</span>  
            <span className='hero__title--line'>l</span>  
            <span className='hero__title--line'>o</span>  
            <span className='hero__title--line'>p</span>  
            <span className='hero__title--line'>e</span>  
            <span className='hero__title--line'>r</span>  
            
        </div>
        <p className='html1'>&lt;/h1&gt;</p>
        <p className='html'>&lt;p&gt;</p>
        <p className='hero__sub'>FRONT END DEVELOPER</p>
        <p className='html'>&lt;/p&gt;</p>
        <Button classes={{root: props.vidu}}   variant="outlined">Contact me</Button>
        <div className='hero__bot'>
            <div className='hero__bot--scroll'>
                <span>Scroll Down</span>
                <div className='hero__bot--scroll__arr'>
                    <Image src={down} priority={true}/>
                </div>
                
            </div>
            <div className='hero__bot--mid'>
                <Image src={mid} priority={true}/>
            </div>
            <div className='hero__bot--scroll side'>
                <span>
                    Scroll Down
                </span> 
                <div className='hero__bot--scroll__arr'>

                    <Image src={down} priority={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}
