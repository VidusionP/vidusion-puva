import '../styles/globals.scss';
import '../components/header/header.scss'


import Layout from '../components/layout';
import React, { useState, useEffect, Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';


function MyApp({ Component, pageProps }) {


useEffect(() => {

    smoothscroll.polyfill();
  } )
    return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
      


    ) 


}

export default MyApp
