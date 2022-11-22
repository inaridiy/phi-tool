import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NoSSR } from "../components";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Header } from "../components/Header";

if (!process.env.NEXT_PUBLIC_ALCHEMY_KEY) throw new Error("ALCHEMY_ID");

const { chains, provider } = configureChains(
  [chain.polygon],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Phi Tools",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSSR>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div data-theme="light" className="bg-base-100 min-h-screen">
            <Header />
            <main className="pt-24 mx-auto px-2 max-w-screen-lg">
              <Component {...pageProps} />
            </main>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </NoSSR>
  );
}
