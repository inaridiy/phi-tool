import Link from "next/link";
import { ToolCard } from "../components/ToolCard";

export default function MintFreeObjectsPage() {
  return (
    <div className="">
      <h2 className="text-2xl font-bold">Mint Phi Free Objects</h2>
      <p className="text-lg mb-6">
        Free objects can be purchased in bulk. The number of each item is
        determined by me. All you have to do is click!
      </p>
      <button className="btn mx-auto max-w-xs w-full">Just Click!!</button>
    </div>
  );
}
