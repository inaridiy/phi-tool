import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="mx-auto max-w-screen-xl flex p-2 justify-between">
        <Link href="/" className="btn btn-ghost text-2xl">
          PHI TOOLS
        </Link>
        <ConnectButton />
      </nav>
    </header>
  );
};
