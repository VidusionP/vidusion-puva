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
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    subject:""
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
          subject:""
        });
      });
  };
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px blue inset" };
  return (
    <div className='contact'>
        <p className='html'>&lt;h2&gt;</p>
        <h2 className='title'>Contact Me</h2>
        <p className='html'>&lt;/h2&gt;</p>
        <p className='html'>&lt;p&gt;</p>
        <p className='contact__para font'>
          Im interested in front end development opportunities - especially small, fast growing companies.
          <br/><br/>
          However, if you have other requests or question, dont hesitate to use the form.
        </p>
        <p className='html'>&lt;/p&gt;</p>
        <p className='html'>&lt;form&gt;</p>
        <form className='contact__form' onSubmit={submitEmail}>
          <div className='contact__form--section'>
            <div className='contact__form--section__main'>
              <TextField
              className={classes.textField}
              required
                InputLabelProps={{
                  className: classes.input,
                  }}
                InputProps={{
                  classes: {
                    root: classes.textFieldRoot,
                  }
                }}
                label="Name"
                name="name"
                onChange={handleStateChange}
                value={mailerState.name} 
                fullWidth 
                autoComplete="no" 
                variant="filled" />
              <TextField 
                            className={classes.textField}
                            required
                InputLabelProps={{
                  className: classes.input,
                  }}
                InputProps={{
                  classes: {
                    root: classes.textFieldRoot,
                  }
                }}
                label="Email" 
                name="email"
                onChange={handleStateChange}
                value={mailerState.email} 
                fullWidth
                autoComplete="no" 
                variant="filled" />
              <TextField 
              required
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
              className={classes.textField}
              label="Subject"
              fullWidth
              autoComplete="new-password"
              name="subject"
              onChange={handleStateChange}
              value={mailerState.subject} 
              variant="filled" />
            </div>
            <div className='contact__form--section__message'>
              <TextField
              required
              InputLabelProps={{
                className: classes.input,
                }}
              InputProps={{
                classes: {
                  root: classes.textFieldRoot,
                }
              }}
              inputProps={{ className: "help" }}
              className={classes.textField}
              label="Message"
              variant="filled"
              multiline
              rows={5}
              fullWidth
              name="message"
              onChange={handleStateChange}
              value={mailerState.message} 
              autoComplete="new-password"/>
            </div>
          </div>
            <Button classes={{root: props.vidu2}} type="submit" variant="outlined">Send Message</Button>
        
        </form>
        <p className='html'>&lt;/form&gt;</p>
        <p className='html'>&lt;/body&gt;</p>
        {/* <Map/> */}
    </div>
  )
}
