import ConnectWallet from "@/components/connectWallet";
import { assets } from "@/app/assets";
import AssetsSection from "@/sections/home/assets";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-6 items-start">
      <h2 className="mb-6">Game Asset Dashboard</h2>
      <ConnectWallet />
      <AssetsSection assets={assets} />
    </main>
  );
}
