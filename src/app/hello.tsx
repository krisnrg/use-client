"use client"

import react from 'react';

const Hello = () => {
    console.log('this is running on the server too');
    return (
        <div>Hello world from Next 14, using 'use client'</div>
    )
}

export default Hello;