import { StaticImageData } from "next/image";

export type Asset = {
  id: number;
  name: string;
  image: StaticImageData;
  owner: string;
};
