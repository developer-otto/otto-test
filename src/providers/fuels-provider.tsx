"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'
import { FuelProvider } from "@fuels/react"
import { defaultConnectors, FueletWalletConnector, FuelWalletConnector } from "@fuels/connectors"

const queryClient = new QueryClient();

export default function FuelsProvider({children}: {children:ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <FuelProvider
        fuelConfig={{
          connectors: [new FuelWalletConnector()]
        }}
      >
      {children}
      </FuelProvider>
    </QueryClientProvider>
  )
}
