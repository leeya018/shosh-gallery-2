// firebaseUtils.ts

import {
  collection,
  addDoc,
  DocumentSnapshot,
  getDoc,
  writeBatch,
  doc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { Product } from "./interfaces";

export const addAll = async (items: Product[]): Promise<void> => {
  const batch = writeBatch(db);
  const colRef = collection(db, "products");

  items.forEach((item) => {
    const newItem = { ...item, createdAt: serverTimestamp() };
    const docRef = doc(colRef); // Generate a new document reference with an auto-generated ID
    batch.set(docRef, newItem);
  });

  await batch.commit();
};
