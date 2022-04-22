import React, { useState, useEffect } from "react";
import Portfolio from '../components/portfolio/portfolio'
import Header from "../components/header/header"
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Blogs from '../components/blogs/blogs'
import Contact from '../components/contact/Contact'
import Script from 'next/script'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  input: {
    color:"#2FE7C6",
    border: "1px solid #2FE7C6",
    margin: "40px 0",
    borderRadius: "1px",
    letterSpacing: "2px",
    "&:hover": {
        border: "1px solid #2FE7C6"
    }
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
            <Script 
              src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" 
              strategy="beforeInteractive"/>
            <Header/>
            <Hero vidu={classes.input}/>
            <Portfolio vidu1={classes.input}/>
            <About/>
            <Blogs/>
            <Contact/>
    </>
  )
}
