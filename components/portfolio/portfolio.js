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
import vivaweb1 from '../../public/vivaweb1.png'
import epicon1 from '../../public/epicon1.png'
import cineyards1 from '../../public/cineyards1.png'
import bandsite1 from '../../public/bandsite1.png'
import brainflix1 from '../../public/brainflix1.png'
import hotair1 from '../../public/hotair1.png'
import lilsweets1 from '../../public/lilsweets1.png'
import space1 from '../../public/space1.png'

const arr = [
  {
    'logo' : vivaweb,
    'img': vivaweb1,
    'modal': false
  },
  { 
    'logo' : exp,
    'img': epicon1
  },
  {
    'logo' : cineyards,
    'img': cineyards1
  },
  {
    'logo' : bandsite,
    'img': bandsite1
  },
  {
    'logo' : brainflix,
    'img': brainflix1
  },
  {
    'logo' : hotair,
    'img': hotair1
  },
  {
    'logo' : lilsweets,
    'img': lilsweets1
  },
  {
    'logo' : spave,
    'img': space1
  }
]

export default function Portfolio(props) {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([
    {
      'logo' : vivaweb,
      'img': vivaweb1,
      'modal': false,
      'id':0
    },
    { 
      'logo' : exp,
      'img': epicon1,
      'modal': false,
      'id':1
    },
    {
      'logo' : cineyards,
      'img': cineyards1,
      'modal': false,
      'id':2
    },
    {
      'logo' : bandsite,
      'img': bandsite1,
      'modal': false,
      'id':3
    },
    {
      'logo' : brainflix,
      'img': brainflix1,
      'modal': false,
      'id':4
    },
    {
      'logo' : hotair,
      'img': hotair1,
      'modal': false,
      'id':5
    },
    {
      'logo' : lilsweets,
      'img': lilsweets1,
      'modal': false,
      'id':6
    },
    {
      'logo' : spave,
      'img': space1,
      'modal': false,
      'id':7
    }
  ])
  const handleChange = e => {

      // console.log(count)
      let list = e.target.id
      let updatedList = data.map(item => {
          if (item.id == list) {
              return {...item, modal : true}
          }
          return item
      })
      setData(updatedList)
  
  };
  const handleChange1 = e => {
    let list = e.target.id
      let updatedList = data.map(item => {
          if (item.id == list) {
              return {...item, modal : false}
          }
          return item
      })
      setData(updatedList)
    
  };
  const [hoverIndex, setHoverIndex] = React.useState(null);
  
  const cardClassname = (index) => {
    if (index === hoverIndex) 
      return "portfolio__work--img__bkg goku2";
    else if (hoverIndex ==null)
      return "portfolio__work--img__bkg goku1";
    else return 'portfolio__work--img__bkg goku1';
  }
  useEffect (() => {


  })
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
          {data.map((item, i) => {
            return (
            <div 
              onMouseOver={() => setHoverIndex(i)}
              onMouseOut={() => setHoverIndex(null)}
              className='portfolio__work--img'
                >
              <Image id={i}  src={item.logo}/>
              <div id={i} className={cardClassname(i)}></div>
              <div id={i}  className={hoverIndex == i? "portfolio__work--img__pop goku1" : 'portfolio__work--img__pop'}>See More</div>
            </div>
            )
            
          })}
          
        </div>
    </div>
  )
}
