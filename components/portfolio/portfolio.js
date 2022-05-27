import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';



export default function Portfolio(props) {
  return (
    <div className='portfolio'>
        <div className='portfolio__top'>
            <p className='html'>&lt;h2&gt;</p>
            <h2 className='title'>My Portfolio</h2>
            <p className='html'>&lt;/h2&gt;</p>
            <p className='html'>&lt;p&gt;</p>
            <p className='portfolio__top--para font'>
              A small gallery of recent projects chosen by me.
              Ive done them all with inspirations springing from
              other developers.
              <br/><br/>
              Interested to learn more about one?
              Contact me now.
            </p>
            <p className='html'>&lt;/p&gt;</p>
            <Button classes={{root: props.vidu1}} className='contact__button' variant="outlined">Contact me</Button>
        </div>
        <div className='portfolio__work'>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
        </div>
    </div>
  )
}
