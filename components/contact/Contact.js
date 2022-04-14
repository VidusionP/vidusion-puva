import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Map from '../map.js'


export default function Contact() {
  return (
    <div className='contact'>
        <h1 className='title'>Contact Me</h1>
        <p className='contact__para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laboriosam facere fugiat facilis ducimus minus
              voluptatum dicta temporibus suscipit, 
            est voluptate delectus minima nostrum quo maiores dolore magnam enim assumenda cum.
        </p>
        <form className='contact__form'>
            <TextField className='contact__form--name'  label="Name" fullWidth autocomplete="new-password" variant="filled" />
            <TextField  label="Email" fullWidth autocomplete="new-password" variant="filled" />
            <TextField  label="Subject" fullWidth autoComplete="new-password" variant="filled" />
            <TextField  label="Message" variant="filled" multiline rows={5} fullWidth autoComplete="new-password"/>
        </form>
        <Button className='test' variant="outlined">Send Message</Button>
        {/* <Map/> */}
    </div>
  )
}
