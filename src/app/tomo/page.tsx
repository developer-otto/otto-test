"use client";
import styles from "../page.module.css";

import { IChainId, useBalance, useConfig, useSendTransaction, useTomo, useTomoUserInfo, useTransactions } from "tomo-tg-wallet-sdk";
import { useCallback, useState } from "react";
import { formatUnits, parseUnits, zeroAddress } from "viem";
import { sepolia } from "viem/chains";


export default function Tomo() {
  const balance = useBalance({ chainId: sepolia.id });
  const tomo = useTomo();
  const { onLogin, onLogout } = useTomo();
  console.log("tomo", tomo);
  const { btcAddress, evmAddress, solAddress, tonAddress } = useTomoUserInfo()
  const { transactions } = useTransactions()
  const {config} = useConfig()
  const { sendEVMTransaction } = useSendTransaction()


  const transactionsRender = Object.keys(transactions)
    .map((key) => {
      const intKey = Number(key) as IChainId
      return transactions[intKey]
    })
    ?.filter((item) => !!item)
    .flat()
    // .filter(item => item.historyType === 'Swap')
    .sort((a, b) => {
      return b.time - a.time
    })
  const [link, setLink] = useState('');

  // console.log("config", config)

  const handleSendEVMToken = useCallback(
      async () => {
        console.log("SEND")
        try {
          const res = await sendEVMTransaction({
            chainId: sepolia.id,
            fromAddress: evmAddress,
            toAddress: "0x32a50B27d48FB897f2B02360D753991C78fcDaAd",
            value: parseUnits(  '0.0001', 18),
            // rpc: sepolia.rpcUrls.default.http[0],
            config,
            tokenValue: parseUnits( '0.0001', 18),
            token: {
              chainId: sepolia.id,
              image: 'https://etherscan.io/images/main/empty-token.png',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
              address: zeroAddress
            },
            data: "0x1234567890934342"
          })
          console.log("res", res)
        } catch (error) {
          console.log("error", error)

        }
    },
    [evmAddress],
  )
  

  return (
    <div className={styles.page}>
      <div>
        <h2>Balance</h2>
        <p>chain: {sepolia.name}</p>
        <p>
          balance: {balance.data?.formatted} {balance.data?.symbol}
        </p>
      </div>
      <div onClick={async (event) => {
        const res = await onLogin();
        console.log("res", res);
        setLink(res);
      }}>onLogin</div>
      <div>
        link: {link}
      </div>
      <div>btcAddress: {btcAddress.bitcoinP2ShAddress}</div>
      <div>evmAddress: {evmAddress}</div>
      <div>solAddress: {solAddress}</div>
      <div>tonAddress: {tonAddress}</div>
      <button
        onClick={() => {
          window.open(link);
        }}
      >
        Open Telegram
      </button>
      <button onClick={(event) => {
        handleSendEVMToken();
      }}>
        <h2>Sned</h2>
      </button>
      <div>
        <h2>History</h2>
        {transactionsRender.map((item, index) => {
          return (
            <p style={{ marginBottom: 16 }} key={item.time}>
              <p>
                <span style={{ marginRight: 16 }}>{item.chainId}</span>
                <span>{item.hash}</span>
              </p>
              <p>
                <span style={{ marginRight: 16 }}>from:{item.fromAddress}</span>
                <span>to:{item.toAddress}</span>
              </p>
              <p>
                <span>
                  amount:{' '}
                  {formatUnits(
                    BigInt(item.toAmount),
                    item.toSwapTokens?.decimals || 18
                  )}{' '}
                  {` ${item.toSwapTokens?.symbol}`}
                </span>
              </p>
            </p>
          );
        })}
      </div>
    </div>
  );
}
