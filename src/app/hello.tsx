"use client"

import react, { useEffect } from 'react';

const Hello = () => {
    useEffect(() => {
        setTimeout(() => {
          console.log('This only runs on client, if you remove "use client" above you get an error cause this hook is here.')
        }, 1000);
      });
      
    console.log('This runs on both server and client.');
    return (
        <div>
            <h1>Hello world from Next 14</h1>
            <p>view source some html, that seems to be the html that is "pre-rendered" on the server for Hello component</p>
        </div>
    )
}

export default Hello;