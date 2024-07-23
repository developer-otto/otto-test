import React, { ReactNode } from 'react'
import { FuelProvider } from "@fuels/react"
import { defaultConnectors } from "@fuels/connectors"

export default function FuelsProvider({children}: {children:ReactNode}) {
  return (
    <FuelProvider fuelConfig={{
      connectors: defaultConnectors({}),
      storage: undefined,
      targetObject: undefined
    }}>
      {children}
    </FuelProvider>
  )
}
