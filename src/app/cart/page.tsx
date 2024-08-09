"use client";
import ProductList from "@/components/ProductList";
import cartStore from "@/mobx/cartStore";
import { useParams } from "next/navigation";

import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Modal from "@/ui/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { handleWhatsAppClick, modals } from "@/util";
import Message from "@/components/Message";
import Header from "@/components/Header";

const CartPage = () => {
  const [message, setMessage] = useState<string>("");
  const [copyTxtBtn, setCopyTxtBtn] = useState("העתק");

  useEffect(() => {
    const itemsStr = localStorage.getItem("cartItems");
    if (itemsStr) {
      const items = JSON.parse(itemsStr);
      cartStore.setItems(items);
    }
  }, []);

  useEffect(() => {
    if (cartStore.items.length === 0) return;
    const names = cartStore.items.map((item) => item.name);

    const messageToSend = ` .${names.join(
      ", "
    )}   : היי שוש , אני אשמח לרכוש את התמונות הבאות  `;
    setMessage(messageToSend);
  }, [cartStore.items]);

  const sendMessage = () => {
    handleWhatsAppClick(message);
  };
  return (
    <div className="max-h-screen overflow-y-auto text-white ">
      <div className="bg-black bg-opacity-50 mb-10 pb-5 mt-34">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl font-bold text-white mt-5 underline">
            העגלה שלי{" "}
          </h1>
        </div>

        <div className="flex justify-center text-xl">
          סכום כולל :
          {cartStore.items.reduce((acc, item) => item.price + acc, 0)}
        </div>
        <div>
          {cartStore.items.length > 0 && (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(message);
                  setCopyTxtBtn("✓");
                }}
                className={` text-white px-3 py-2
                shadow-lg flex items-center rounded-md mt-4 ${
                  copyTxtBtn === "✓"
                    ? "bg-gray-500 cursor-default"
                    : "bg-blue-500 cursor-pointer"
                }`}
              >
                {copyTxtBtn}
              </button>
              <div>{message}</div>
              <button
                disabled={cartStore.items.length === 0 || copyTxtBtn !== "✓"}
                onClick={() => {
                  if (cartStore.items.length > 0 && copyTxtBtn === "✓") {
                    sendMessage();
                  }
                }}
                className={`flex items-center  text-white px-4 
          py-2 rounded-md  ${
            cartStore.items.length > 0 && copyTxtBtn === "✓"
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-500 cursor-default"
          }`}
              >
                שלח בקשה למוכר
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <ProductList
          products={cartStore.items}
          isLoading={false}
          pageName="cart"
        />
      </div>

      <Message />
    </div>
  );
};
export default observer(CartPage);
