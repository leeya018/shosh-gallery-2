"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import authStore from "@/mobx/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import cartStore from "@/mobx/cartStore";
import { useRouter } from "next/navigation";

const Header = observer(() => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Error signing out:", error);
      }
    }
  };

  return (
    <header className="z-50 flex justify-between items-center px-6 py-2  shadow-md md:text-xl">
      <div className="logo flex items-center">
        <Image
          alt="logo"
          width={70}
          height={70}
          src={"/images/logo.png"}
          className="bg-center object-cover rounded-full w-[70px] h-[70px]"
        />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          <FaBars size={30} />
        </button>
      </div>

      {/*  sceond small  */}
      <div
        className={`md:flex z-50 md:z-auto  ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:items-center md:space-x-6 gap-0 md:gap-5 flex-col md:flex-row absolute md:static w-full md:w-auto top-16 md:top-auto left-0 md:left-auto`}
      >
        <li
          onClick={() => setActiveTab("home")}
          className="w-full  text-center border-b md:border-0 list-none md:order-2 bg-gray-700 md:bg-transparent bg-opacity-80  py-6 md:py-2"
        >
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-white hover:underline ">בית</span>
          </Link>
        </li>
        <li
          onClick={() => setActiveTab("cart")}
          className="relative w-full flex justify-center items-center text-center py-2 border-b md:border-0 md:order-1 bg-gray-700 md:bg-transparent bg-opacity-80 "
        >
          <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative w-14 h-14 flex justify-center items-center">
              <FaCartShopping
                size={30}
                className="text-white hover:text-gray-300 mx-auto"
              />
              {cartStore.items?.length > 0 && (
                <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartStore.items?.length}
                </span>
              )}
            </div>
          </Link>
        </li>

        <div className="py-2 w-full text-center md:order-3 z-50  bg-gray-700 md:bg-transparent bg-opacity-80 ">
          {authStore.isLoggedIn ? (
            <div className="md:flex md:flex-row md:items-center md:w-56 md:gap-4">
              {/* <span className="block md:inline-block mr-2"> */}
              <span className="flex text-white">
                שלום, {authStore.user?.displayName || authStore.user?.email}
              </span>
              <button
                onClick={logout}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                יציאה
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/");
                ModalStore.openModal(modals.login);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              כניסה
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
