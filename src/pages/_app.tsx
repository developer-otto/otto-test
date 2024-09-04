"use client"

import "src/styles/globals.css";
import type { AppProps } from "next/app";
import FuelsProvider from "src/providers/fuels-provider";

export default function App({ Component, pageProps }: AppProps) {
  return <FuelsProvider>
    <section className="flex-1 space-y-4 p-4 lg:p-8 pt-6">
      <Component {...pageProps} />
    </section>
  </FuelsProvider>;
}
