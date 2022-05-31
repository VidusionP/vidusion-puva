import React, {  useState, useEffect, useRef } from 'react';
import Sound from 'react-sound';
import {Howl, Howler} from 'howler';

export default function PlaySound(props) {
    useEffect(() => {
        window.soundManager.setup({debugMode: false});
    })   
    return (
        <Sound
            url={'https://github.com/VidusionP/vidusion-puva/blob/main/jazz.mp3?raw=true'}
            playStatus={props.playing? Sound.status.PLAYING : Sound.status.PAUSED}
            loop={true}
        />
    )
} 