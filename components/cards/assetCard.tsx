"use client";

import { selectUser } from "@/lib/features/userSlice";
import { useAppSelector } from "@/lib/hooks";
import { Asset } from "@/types/asset";
import Image from "next/image";

interface Props {
  asset: Asset;
}

export default function AssetCard({ asset }: Props) {
  const user = useAppSelector(selectUser);
  const connectedAddress = user?.address ?? null;
  const isOwned = connectedAddress === asset.owner;

  return (
    <div className={`relative flex flex-col items-center border rounded p-3 shadow-lg ${isOwned ? "border-green-500" : "border-white-300"}`}>
      <Image width={150} height={150} src={asset.image} alt={asset.name} className="w-[100px] h-[100px]" />
      <h5 className="mt-2 text-center">{asset.name}</h5>
      <p className="text-sm text-primary">Owner: {asset.owner}</p>
      {isOwned && <div className="absolute -top-2 -right-2 rounded-full size-[30px] bg-success inline-flex items-center justify-center">✔</div>}
    </div>
  );
}
