import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
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

export default function Portfolio(props) {
  const classes = useStyles();
  return (
    <div className='portfolio'>
        <div className='portfolio__top'>
            <p className='html'>&lt;h2&gt;</p>
            <h2 className='title'>My Portfolio</h2>
            <p className='html'>&lt;/h2&gt;</p>
            <p className='html'>&lt;p&gt;</p>
            <p className='portfolio__top--para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente eaque suscipit, id veritatis saepe animi non, 
                tempore dolores doloremque odit reprehenderit temporibus ex 
                autem odio expedita dicta voluptate numquam fuga!
            </p>
            <p className='html'>&lt;/p&gt;</p>
            <Button classes={{root: props.vidu1}} className='contact__button' variant="outlined">Contact me</Button>
        </div>
        {/* <div className='portfolio__work'>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
          <div className='portfolio__work--img'></div>
        </div> */}
    </div>
  )
}
