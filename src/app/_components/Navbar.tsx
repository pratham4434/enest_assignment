"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { MdOutlineSchool } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { TbBrain } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import Image from "next/image";
import logo from "../../app/assets/enest.png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-2xl font-sans font-semibold text-violet-600">
            E-NEST
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menubar Section */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex justify-center items-center space-x-12 text-md font-medium text-gray-500 lg:space-x-8 absolute lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 px-6 lg:px-0 transition-all duration-300 ease-in-out z-40`}
        >
          <li className="cursor-pointer hover:text-blue-600">
            <div className="flex justify-center items-center gap-2">
              <MdOutlineSchool className="text-gray-600 text-lg" />
              Home
            </div>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <div className="flex justify-center items-center gap-2">
              <CiMemoPad className="text-gray-600 text-lg" />
              Test Series
            </div>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <div className="flex justify-center items-center gap-2">
              <TbBrain className="text-gray-600 text-lg" />
              Skill Connect
            </div>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <div className="flex justify-center items-center gap-2">
              <MdGroup className="text-gray-600 text-lg" />
              Expert Connect
            </div>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <div className="flex justify-center items-center gap-2">
              More
              <ChevronDownIcon className="text-gray-600 text-lg" />
            </div>
          </li>
        </ul>

        {/* Avatar Section */}
        <div className="flex items-center justify-center">
          <Menubar className="rounded-full p-1 bg-gray-200">
            <MenubarMenu>
              <MenubarTrigger>
              </MenubarTrigger>
              <MenubarContent className="rounded-lg p-2 bg-white shadow-md">
                <MenubarItem>
                  Search <MenubarShortcut>Ctrl+K</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Profile</MenubarItem>
                <MenubarItem>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
}
