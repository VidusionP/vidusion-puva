import Header from "./header/header"
import Hero from './hero/hero'
import React, { useState, useEffect } from "react";
// import Footer from './Footer/Footer'
// import Project from './Project/Project'

import Scroll from './scroll'
import hero from "./hero/hero";



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
            {/* <Scroll/> */}
            <Header/>
            <Hero/>
            {/* {displayChildren} */}
            {/* <Project/>
            <Footer/> */}
        </>
    )
}

export default Layout