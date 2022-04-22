import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Map from '../map.js'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  input: {
    color: "#565555",
    "&.Mui-focused": {
      color: "#2FE7C6"
    }
  },
  textFieldRoot: {
    // this will be applied when hovered (input text color change)
    color:'#2FE7C6',
    "&:hover": {
      color: "#565555",
    },
    "&:after": {
      borderColor: '#2FE7C6'
    },
    // this will applied when hovered (input border color change)
    "&:hover $textFieldNotchedOutline": {
      borderColor: '#2FE7C6'
    },
    // this will be applied when focused (input border color change)
    "&$textFieldFocused $textFieldNotchedOutline": {
      borderColor: '#2FE7C6'
    }
  },
});


export default function Contact() {
  const classes = useStyles();
  return (
    <div className='contact'>
        <p className='html'>&lt;h2&gt;</p>
        <h2 className='title'>Contact Me</h2>
        <p className='html'>&lt;/h2&gt;</p>
        <p className='html'>&lt;p&gt;</p>
        <p className='contact__para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laboriosam facere fugiat facilis ducimus minus
              voluptatum dicta temporibus suscipit, 
            est voluptate delectus minima nostrum quo maiores dolore magnam enim assumenda cum.
        </p>
        <p className='html'>&lt;/p&gt;</p>
        <p className='html'>&lt;form&gt;</p>
        <form className='contact__form'>
            <TextField
            className='contact__form--name contact__form--input'
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
              label="Name" 
              fullWidth 
              autocomplete="new-password" 
              variant="filled" />
            <TextField 
              className='contact__form--name contact__form--input'
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
              id='feild1' label="Email" 
              fullWidth autocomplete="new-password" 
              variant="filled" />
            <TextField 
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
              className='contact__form--name contact__form--input' label="Subject" fullWidth autoComplete="new-password" variant="filled" />
            <TextField
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
            className='contact__form--name contact__form--input' label="Message" variant="filled" multiline rows={5} fullWidth autoComplete="new-password"/>
            <Button className='contact__button contact__bot' variant="outlined">Send Message</Button>
        
        </form>
        <p className='html'>&lt;/form&gt;</p>
        <p className='html'>&lt;/body&gt;</p>
        {/* <Map/> */}
    </div>
  )
}
