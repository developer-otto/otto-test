"use client";


import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react'

export default function template({children}: {children: ReactNode}) {
    
    useEffect(() => {
        if (window) {
            let vConsole: any;
            const loadVConsole = async () => {
              const VConsole = (await import('vconsole')).default;
              vConsole = new VConsole();
            };
            loadVConsole();
            return () => {
              if (vConsole) vConsole.destroy();
            };
        }
    }, [])
    
  return (
    <div>
        <div className='my-5'>
          <Link href="/">Main</Link>
        </div>

        {children}
    </div>
  )
}
