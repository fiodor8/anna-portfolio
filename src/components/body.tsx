 "use client";

import React, { useEffect } from 'react';
import Menu from '../components/menu'

export default function BodyLayout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        const setBodyHeight = () => {
          document.body.style.height = `${window.innerHeight}px`;
        };
    
        // Set body height on component mount
        setBodyHeight();
    
        // Set body height on window resize
        window.addEventListener('resize', setBodyHeight);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', setBodyHeight);
        };
      }, []);

    return (
        <body className="max-w-screen-2xl overflow-hidden -z-20 relative mx-auto min-h-screen flex bg-gradient-to-br from-neutral-950 to-neutral-950 text-white">
        <Menu/>
        {children}
    </body>
    )
}