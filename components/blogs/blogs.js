import React, {  useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function blogs() {
  return (
    <div>
        <span>Blogs </span>
        <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sapiente eaque suscipit, id veritatis saepe animi non, 
            tempore dolores doloremque odit reprehenderit temporibus ex 
            autem odio expedita dicta voluptate numquam fuga!
        </p>
        <div>
            <p>WEB DEVELOPMENT</p>
            <h3>Fundamentals of HTML5 & CSS3</h3>
            <p>Hypertext markup language (HTML) structures documents such as web pages by...</p>
        </div>
    </div>
  )
}
