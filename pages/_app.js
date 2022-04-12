import '../styles/globals.scss';
import '../components/header/header.scss'
import '../components/about/about.scss'


import Script from 'next/script'
import Head from "next/head";
import Layout from '../components/layout';
import React, { useState, useEffect, Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';


function MyApp({ Component, pageProps }) {


useEffect(() => {

    smoothscroll.polyfill();
  },[] )
    return (
      <>
          <Component {...pageProps} />
      </>
    
      


    ) 


}

export default MyApp
