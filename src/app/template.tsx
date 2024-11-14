"use client";


import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import Script from "next/script";
import VConsole from 'vconsole';

export default function template({ children }: { children: ReactNode; }) {

  return (
    <div>
      <div className='my-5'>
        <Link href="/">Main</Link>
      </div>

      {children}
      <Script
        src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"
        onLoad={() => {
          new VConsole();
        }}
      ></Script>
    </div>
  );
}
