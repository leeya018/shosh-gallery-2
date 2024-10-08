import { Timestamp } from "firebase/firestore";

export type Product = {
  id?: string;
  name: string;
  imageUrl?: string;
  image?: File | null;
  price: number;
  currency: string;
  description: string;
  size: Size;
};

export type Size = {
  width: number;
  height: number;
};
