import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Map from '../map.js'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textField: {

  backgroundColor:'#2B2B2B',
  margin: '5px 0',

},
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


export default function Contact(props) {
  const classes = useStyles();

  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px blue inset" };
  return (
    <div className='contact'>
        <p className='html'>&lt;h2&gt;</p>
        <h2 className='title'>Contact Me</h2>
        <p className='html'>&lt;/h2&gt;</p>
        <p className='html'>&lt;p&gt;</p>
        <p className='contact__para font'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Laboriosam facere fugiat facilis ducimus minus
              voluptatum dicta temporibus suscipit, 
            est voluptate delectus minima nostrum quo maiores dolore magnam enim assumenda cum.
        </p>
        <p className='html'>&lt;/p&gt;</p>
        <p className='html'>&lt;form&gt;</p>
        <form className='contact__form'>
            <TextField
            className={classes.textField}
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
              autocomplete="no" 
              variant="filled" />
            <TextField 
                          className={classes.textField}

              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
               label="Email" 
              fullWidth
              autoComplete="no" 
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
                          className={classes.textField}
 label="Subject" fullWidth autoComplete="new-password" variant="filled" />
            <TextField
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
                        className={classes.textField}
 label="Message" variant="filled" multiline rows={5} fullWidth autoComplete="new-password"/>
            <Button classes={{root: props.vidu2}} variant="outlined">Send Message</Button>
        
        </form>
        <p className='html'>&lt;/form&gt;</p>
        <p className='html'>&lt;/body&gt;</p>
        {/* <Map/> */}
    </div>
  )
}
