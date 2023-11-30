"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useRef } from "react";

const SideMenu = () => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    menuRef.current?.classList.add("w-2/6", "p-2");
    menuRef.current?.classList.remove("w-0", "p-0");

    shadowRef.current?.classList.replace("hidden", "block");
  };

  const onClose = () => {
    menuRef.current?.classList.add("w-0", "p-0");
    menuRef.current?.classList.remove("w-2/6", "p-2");

    shadowRef.current?.classList.replace("block", "hidden");
  };

  const onLogout = () => {
    if (localStorage) {
      localStorage.removeItem("adminToken");
      if (!localStorage.getItem("adminToken")) router.push("/login");
    }
  };

  return (
    <section>
      <div onClick={onOpen} className="relative w-12 h-12 cursor-pointer">
        <img
          className="absolute w-full h-full object-cover"
          src="/icons/menu.svg"
          alt="TeachMe Logo"
        />
      </div>
      <div
        ref={menuRef}
        className="transition-all duration-300 absolute top-0 right-0 bg-white border-l-2 border-black h-full overflow-x-hidden w-0 p-0 flex flex-col items-start justify-start space-y-5"
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="text-3xl font-cairo font-bold text-start">Menu</h2>
          <button
            onClick={onClose}
            className="bg-red-500 w-10 h-10 p-1 rounded-md text-white font-extrabold"
          >
            X
          </button>
        </div>
        <ul className="w-full flex flex-col items-start justify-start space-y-3">
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/centers"
            >
              Centers
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/centers"
            >
              Sessions
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/centers"
            >
              Halls
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/attachments"
            >
              Attachments
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/admins"
            >
              Admins
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/parents"
            >
              Parents
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/teachers"
            >
              Teachers
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/students"
            >
              Students
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/analytics"
            >
              Analytics
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/payments"
            >
              Payments
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/membership"
            >
              Membership
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full text-center text-blue-500 font-semibold text-xl"
              href="/settings"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="w-full flex items-center justify-center mt-5">
          <button
            onClick={onLogout}
            className="bg-red-500 w-8/12 py-2 text-xl rounded-md text-white font-extrabold"
          >
            Log out
          </button>
        </div>
      </div>
      <div
        ref={shadowRef}
        onClick={onClose}
        className="fixed top-0 hidden left-0 bg-transparent w-4/6 h-full overflow-x-hidden"
      />
    </section>
  );
};

export default SideMenu;
