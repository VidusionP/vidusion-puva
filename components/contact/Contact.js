import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Map from '../map.js'


export default function Contact() {
  return (
    <div>
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laboriosam facere fugiat facilis ducimus minus
              voluptatum dicta temporibus suscipit, 
            est voluptate delectus minima nostrum quo maiores dolore magnam enim assumenda cum.
        </p>
        <form>
            <TextField id="name" label="Name" fullWidth autocomplete="none" variant="filled" />
            <TextField id="email" label="Email" fullWidth autocomplete="none" variant="filled" />
            <TextField id="subject" label="Subject" fullWidth autocomplete="none" variant="filled" />
            <TextField id="message" label="Message" variant="filled" multiline rows={5} fullWidth autocomplete="none"/>
        </form>
        <Button className='test' variant="outlined">Send Message</Button>
        {/* <Map/> */}
    </div>
  )
}
