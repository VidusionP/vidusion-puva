import React, {  useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerCollapse} from 'react-animated-burgers'
import Slider from '../slider'
import music from '../../public/music.png'
import logo from '../../public/Logo.png'
import twitter from '../../public/twitter.png'
import PlaySound from '../PlaySound'


export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    
    const handleChange = () => {
        setCheck(!check);
        
      };
      const handleChange1 = () => {
        setCheck1(!check1);
        
      };
   
    const handleClick =(e) => {
        const id = e.target.id
        const arr = Array.from(props.vidu.current.childNodes)
        const che = !isOpen
        arr[id].scrollIntoView()
        // setTimeout(() => setIsOpen(che), 1000)
        if (window.innerWidth<1200) {
            setIsOpen(che)

        }
        

      }
    useEffect(() => {
        // isOpen?document.body.classList.add('fullBody'):document.body.classList.remove('fullBody')
        isOpen?document.documentElement.classList.add('fullBody'):document.documentElement.classList.remove('fullBody')
    })
    return (
        <header className='header'>
            <div className='header__top'>
                <div className='header__top--slider'>
                    <Slider
                        className='header__top--slider--slide'
                        handleChange={handleChange}
                    />
                </div>
                <div className='header__top--sound' style={{color:'white'}} onClick={handleChange1}>
                    <div className='header__top--sound__logo'>
                        <PlaySound playing={check1}/>
                        <Image layout="responsive" priority={true} src={music} />
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
                        <li  className='header__nav--bot__menu--list' id='2' onClick={handleClick}>Work</li>
                        <li className='header__nav--bot__menu--list' id='3' onClick={handleClick}>About</li>
                        {/* <li className='header__nav--bot__menu--list'>Skills</li> */}
                        <li className='header__nav--bot__menu--list' id='4' onClick={handleClick}>Blogs</li>
                        <li className='header__nav--bot__menu--list' id='5' onClick={handleClick}>Contact</li>
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