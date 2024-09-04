"use client";


import React, { ReactNode } from 'react'
import { TomoProvider } from 'tomo-tg-wallet-sdk'

export default function TonTgWallet ({
    children,
}: { children: ReactNode; }){
    const tmaUserid = '1724167815691164884'
    const tmaKey =
      '9eef2af56006385f28723f7c8241ffe35535a45172f7ddcf80e63a5a790ac485'
  return (
    <TomoProvider tmaid={tmaUserid} tmakey={tmaKey} env={'main'}>
      {children}
    </TomoProvider>
  )
}
