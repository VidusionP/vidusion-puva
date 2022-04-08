import React, { useEffect, useState } from "react";
import Image from 'next/image'

import scroll from '../public/scroll.png'

export default function Scroll() {
  const [vidu, setVidu] = useState(false)

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(function mount() {
    function onScroll() {
      if (window.pageYOffset > window.innerHeight) {
        setVidu(true)
      } else {
        setVidu(false)
      }
      // console.log(window.innerHeight);
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div onClick={scrollTop} className={vidu?'arrow active1':'arrow'}>
      <Image priority={true} alt='go_to_top' layout='responsive' src={scroll}/>
    </div>
  );
}