import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="mx-auto max-w-screen-xl flex p-2 justify-between">
        <button className="btn btn-ghost">PHI TOOLS</button>
        <ConnectButton />
      </nav>
    </header>
  );
};
