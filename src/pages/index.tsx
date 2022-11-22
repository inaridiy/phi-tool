import Link from "next/link";
import { ToolCard } from "../components/ToolCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Link href="/mintFreeObjects">
        <ToolCard>
          <h2 className="text-2xl font-bold">Mint Free Objects</h2>
          <div className="text-lg">Mint all PHI free objects together.</div>
        </ToolCard>
      </Link>
      <a href="https://www.as-faucet.xyz/polygon#">
        <ToolCard>
          <h2 className="text-2xl font-bold">Community Faucet</h2>
          <div className="text-lg">Get a free MATIC to play PHI!</div>
        </ToolCard>
      </a>
    </div>
  );
}
