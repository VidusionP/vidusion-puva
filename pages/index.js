import React, { useState, useEffect } from "react";
import Portfolio from '../components/portfolio/portfolio'
import Header from "../components/header/header"
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Blogs from '../components/blogs/blogs'
import Contact from '../components/contact/Contact'
import Script from 'next/script'


export default function Home() {

  return (
    <>
            <Script 
              src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" 
              strategy="beforeInteractive"/>
            <Header/>
            <Hero/>
            <Portfolio/>
            <About/>
            <Blogs/>
            <Contact/>
    </>
  )
}
