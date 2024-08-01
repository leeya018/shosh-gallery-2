// firebaseUtils.ts

import {
  collection,
  addDoc,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { Product } from "./interfaces";

export const addProductApi = async (product: Product) => {
  try {
    // Add product to Firestore
    const docRef = await addDoc(collection(db, "products"), {
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      currency: product.currency,
      description: product.description,
      createdAt: new Date(),
    });

    console.log("Product added successfully!");
    // Get the newly added document's data
    const docSnap: DocumentSnapshot = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("Failed to get the newly added document.");
    }

    const data = docSnap.data();
    const id = docSnap.id;
    console.log("Product added successfully!");

    return { id, ...data } as Product;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    } else {
      console.error("Error adding product:", error);
    }
  }
};
