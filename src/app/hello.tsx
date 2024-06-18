"use client"

import react, { useEffect } from 'react';

const Hello = () => {

    useEffect(() => {
        setTimeout(() => {
          console.log('This only runs on client, if you remoev "use client" above you get an error cause this hook is here.')
        }, 1000);
      });
      
    console.log('This runs on both server and client.');
    return (
        <div>Hello world from Next 14</div>
    )
}

export default Hello;