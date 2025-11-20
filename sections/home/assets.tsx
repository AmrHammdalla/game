"use client";
import GridContainer from "@/components/containers/gridContainer";
import { selectUser } from "@/lib/features/userSlice";
import { useAppSelector } from "@/lib/hooks";
import { Asset } from "@/types/asset";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function AssetsSection({ assets }: { assets: Asset[] }) {
  const [showMine, setShowMine] = useState(false);
  const user = useAppSelector(selectUser);
  const connectedAddress = user?.address ?? null;
  const filteredAssets = showMine && connectedAddress ? assets.filter((a) => a.owner === connectedAddress) : assets;

  return (
    <div className="flex flex-col gap-4 items-start">
      {connectedAddress && (
        <Button color="secondary" onPress={() => setShowMine(!showMine)}>
          {showMine ? "Show All Assets" : "Show My Assets Only"}
        </Button>
      )}

      <GridContainer
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-6"
        type="asset"
        items={filteredAssets}
      ></GridContainer>
    </div>
  );
}
