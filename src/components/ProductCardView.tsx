// components/Product.tsx

import { Product } from "@/api/product/interfaces";
import { removeProductApi } from "@/api/product/remove";
import authStore from "@/mobx/authStore";
import messageStore from "@/mobx/messageStore";
import { ModalStore } from "@/mobx/modalStore";
import productStore from "@/mobx/ProductStore";
import { currencies, modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import React from "react";
import AddButton from "./AddButton";
import cartStore from "@/mobx/cartStore";
import OriginalSizeImage from "./OriginalSizeImage";

type ProductCardView = {
  pageName: string;
};

const ProductCardView: React.FC<ProductCardView> = ({ pageName }) => {
  if (!productStore.chosenProduct) return <div></div>;

  const { id, name, size, imageUrl, price, currency, description } =
    productStore.chosenProduct;

  const isExists = cartStore.isItemExists(productStore.chosenProduct);

  const handleRemove = async () => {
    try {
      const product = productStore.chosenProduct;
      if (!product?.id) {
        messageStore.setMessage("product id not defiened");
        return;
      } else if (!product.imageUrl) {
        messageStore.setMessage("imageUrl not defiened");
        return;
      }
      await removeProductApi(product.id, product.imageUrl);
      productStore.removeProduct(product.id);
      messageStore.setMessage("Product removed successfully!", "success");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        messageStore.setMessage(
          "Error removing product: " + error.message,
          "error"
        );
      } else {
        console.error("Error adding product:", error);
      }
    } finally {
      ModalStore.closeModal();
    }
  };

  const addToCart = () => {
    if (!productStore.chosenProduct) return;
    if (cartStore.isItemExists(productStore.chosenProduct)) {
      return;
    }
    cartStore.addItem(productStore.chosenProduct);
  };
  console.log({ imageUrl });
  return (
    <div className=" mx-2  my-5 rounded-xl  bg-card-gradient  text-right  ">
      <div className=" relative w-full ">
        {/* <Image
          alt={name + "תמונה של"}
          src={imageUrl ? imageUrl : "/"}
          layout="fill"
          className=" bg-center object-cover "
        /> */}
        <OriginalSizeImage
          src={imageUrl ? imageUrl : "/"}
          alt={name + "תמונה של"}
        />
      </div>
      <div className="my-4 px-5 py-2 text-white">
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          {name}
        </h3>
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          מחיר : {price} שקלים
        </h3>
        <h3 className="text-lg font-semibold mb-2 whitespace-normal  ">
          <p>
            {size.width} X {size.height}
          </p>
        </h3>
        <h3 className="text-lg mt-4 font-semibold mb-2  whitespace-pre-wrap ">
          {description}
        </h3>
      </div>
      {authStore.isLoggedIn && (
        <div className="w-full flex justify-between items-center">
          {/* <button
            onClick={handleRemove}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            מחק
          </button> */}
          <button
            onClick={() => {
              ModalStore.openModal(modals.editProduct);
            }}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            ערוך
          </button>
        </div>
      )}

      {!authStore.isLoggedIn && (
        <button
          onClick={addToCart}
          disabled={isExists}
          className={`${
            isExists ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          } flex items-center  text-white px-4 py-2 rounded-md `}
        >
          {isExists ? "הוסף לעגלה" : "הכנס לעגלה"}
        </button>
      )}
    </div>
  );
};

export default observer(ProductCardView);
