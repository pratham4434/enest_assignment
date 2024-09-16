"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Menubar, MenubarItem, MenubarButton, MenubarList } from "@/components/ui/Menubar";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from 'next/image';
import logo from '../../app/assets/enest.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
      <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-xl font-semibold text-blue-600">E-NEST</span>
      </div>

      {/* Menubar Section */}
      <ul className="flex space-x-8 text-lg">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Services</li>
        <li className="cursor-pointer hover:text-blue-600">Blog</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>

      {/* Avatar Section */}
      <div className="flex items-center space-x-4">
        {/* <Menubar>
          <MenubarButton className="flex items-center space-x-2 cursor-pointer">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/user-avatar.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <ChevronDownIcon />
          </MenubarButton>
          <MenubarList>
            <MenubarItem>Profile</MenubarItem>
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Logout</MenubarItem>
          </MenubarList>
        </Menubar> */}
      </div>
    </nav>
  );
}
