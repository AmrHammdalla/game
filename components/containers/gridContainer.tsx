import { Asset } from "@/types/asset";
import AssetCard from "../cards/assetCard";

type GridContainerProps = {
  items: Asset[];
  type: "asset";
  className?: string;
};

export default function GridContainer({ items, type, className, ...rest }: GridContainerProps) {
  return (
    <div {...rest} className={className ? className : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"}>
      {type === "asset" && items.map((item) => <AssetCard key={item.id} asset={item} />)}
    </div>
  );
}
