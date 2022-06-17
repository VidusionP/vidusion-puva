import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import vivaweb from '../../public/vivaweb.png'
import exp from '../../public/exp.png'
import cineyards from '../../public/cineyards.png'
import bandsite from '../../public/bandsite.png'
import brainflix from '../../public/brainflix.png'
import hotair from '../../public/hotair.png'
import lilsweets from '../../public/lilsweets.png'
import spave from '../../public/spave.png'



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
          <div className='portfolio__work--img'>
            <Image src={vivaweb}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={exp}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={cineyards}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={bandsite}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={brainflix}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={hotair}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={lilsweets}/>
          </div>
          <div className='portfolio__work--img'>
            <Image src={spave}/>
          </div>
        </div>
    </div>
  )
}
