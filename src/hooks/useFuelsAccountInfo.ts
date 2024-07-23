import { useFuel } from '@fuels/react';
import React, { useCallback } from 'react'

export default function useFuelsAccountInfo() {

    const { fuel } = useFuel()

    const name = "FUELS"

    const { accounts, disconnect, connect } = fuel

    const switchChain = useCallback(
      () => {
        console.log("switchChain")
      },
      [],
    )
    

    return ({
        address: "",
        name,
        disconnectAsync: disconnect,
        switchChain,
        chainName: name,
        connect,
        icon: "",
        balance: "--"
    })
}
