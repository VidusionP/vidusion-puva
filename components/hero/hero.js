import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import head from '../../public/Head.jpg'
import down from '../../public/arrowdown.png'


export default function Hero() {
  return (
    <div>
        <p>&lt;body&gt;</p>
        <p>&lt;img</p>
        <div>
            {/* <Image src={head} priority={true}/> */}
        </div>
        <p>&gt;</p>
        <p>&lt;h1&gt;</p>
        <div>
            <p>Hi,</p>
            <p>I&apos;m Vidu,</p>
            <p>Web Developer</p>
        </div>
        <p>&lt;h1/&gt;</p>
        <p>&lt;p&gt;</p>
        <p>FRONT END DEVELOPER</p>
        <p>&lt;p&gt;</p>
        <button>
            Contact Me
        </button>
        <div>
            <div>Scroll Down 
                <Image src={down} priority={true}/>
            </div>
            <div>
                <Image src={down} priority={true}/>
            </div>
            <div>Scroll Down 
                <Image src={down} priority={true}/>
            </div>
        </div>
    </div>
  )
}
