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
        console.log("hi")
        isOpen?document.body.classList.add('fullBody'):document.body.classList.remove('fullBody')
        isOpen?document.documentElement.classList.add('fullBody'):document.documentElement.classList.remove('fullBody')
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
                    <p className='header__top--sound__text' style={{color:check1? 'green' :'red'}} >{check1?" ON ":"OFF"}</p>
                </div>
                <div className='header__top--menu'>
                    <HamburgerCollapse isActive={isOpen} toggleButton={() => setIsOpen(!isOpen)}/>
                </div>
            </div>
            <nav className={isOpen?'header__nav mobileOpen':'header__nav'} >
                <div className='header__nav--top'>
                    <div className='header__nav--top__logo'>
                        <Image src={logo} priority={true}/>
                    </div>
                    <p className='header__nav--top__name'>Vidu</p>
                    <p className='header__nav--top__job'>Front End Developer</p>
                </div>
                <div className='header__nav--bot'>
                    <ul className='header__nav--bot__menu'>
                        <li className='header__nav--bot__menu--list'>About</li>
                        <li className='header__nav--bot__menu--list'>My Skills</li>
                        <li className='header__nav--bot__menu--list'>Work</li>
                        <li className='header__nav--bot__menu--list'>Blogs</li>
                        <li className='header__nav--bot__menu--list'>Contact</li>
                    </ul>
                    <div className='header__nav--bot__soc'>
                        <div className='header__nav--bot__soc--img'>
                            <Image src={twitter}/>
                        </div>
                        <div className='header__nav--bot__soc--img'>
                            <Image src={twitter}/>
                        </div>
                        <div className='header__nav--bot__soc--img'>
                            <Image src={twitter}/>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}