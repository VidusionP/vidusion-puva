import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerCollapse} from 'react-animated-burgers'
import Slider from '../slider'
import music from '../../public/music.png'
import logo from '../../public/Logo.png'
import twitter from '../../public/twitter.png'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const handleChange = () => {
        setCheck(!check);
        
      };
      const handleChange1 = () => {
        setCheck1(!check1);
        
      };
    useEffect(() => {
        // console.log(check)
        // isOpen?document.body.classList.add('fullBody'):document.body.classList.remove('fullBody')
        // isOpen?document.documentElement.classList.add('fullBody'):document.documentElement.classList.remove('fullBody')
    })
    return (
        <header className='header'>
            <div className='header__top'>
                <div className='header__top--slider'>
                    <Slider
                        handleChange={handleChange}
                    />
                </div>
                <div className='header__top--sound' style={{color:'white'}} onClick={handleChange1}>
                    <div className='header__top--sound__logo'>
                        <Image priority={true} src={music}/>
                    </div>
                    Sound
                    <p className='header__top--sound__text' style={{color:check1? 'green' :'red'}} >{check1?"ON":"OFF"}</p>
                </div>
                <div className='header__top--menu'>
                    <HamburgerCollapse isActive={isOpen} toggleButton={() => setIsOpen(!isOpen)}/>
                </div>
            </div>
            <nav className={isOpen?'header__nav active':'header__nav'} >
                <div>
                    <div>
                        <Image src={logo} priority={true}/>
                    </div>
                    <p>Vidu</p>
                    <p>Front End Developer</p>
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>My Skills</li>
                        <li>Work</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <Image src={twitter}/>
                        <Image src={twitter}/>
                        <Image src={twitter}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}