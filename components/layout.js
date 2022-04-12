import Header from "./header/header"

import React, { useState, useEffect } from "react";
// import Footer from './Footer/Footer'
// import Project from './Project/Project'

import Scroll from './scroll'

import Portfolio from './portfolio/portfolio'
import Hero from './hero/hero'
import About from './about/about'
import Script from 'next/script'



const Layout = ({ children, pageTitle, description, ...props }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    // useEffect(() => {
      
    //     setTransitionStage("fadeIn");
        
    //   }, []);
    //   useEffect(() => {
    //     if (children !== displayChildren) setTransitionStage("fadeOut");
        
    //   }, [children, setDisplayChildren, displayChildren]);



{/* <div onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            window.scrollTo({ top: 0, scrollBehavior: 'auto'});
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
            className={`content ${transitionStage}`}></div> */}

    return (
        <>  
            <Script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" strategy="beforeInteractive"/>

            {/* <Scroll/> */}
            <Header/>
            <Hero/>
            <Portfolio/>
            <About/>
            {/* {displayChildren} */}
            {/* <Project/>
            <Footer/> */}
        </>
    )
}

export default Layout