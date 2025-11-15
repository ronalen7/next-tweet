import React from "react";
import { FiHome, FiBell, FiMessageCircle, FiSearch, FiUser, FiSettings } from "react-icons/fi";
import { HiHashtag } from "react-icons/hi";
import SidebarItem from "@/components/layout/SidebarItem";

export default function Sidebar() {
  const links = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "Explore", href: "/explore", icon: HiHashtag },
    { name: "Notifications", href: "/notifications", icon: FiBell },
    { name: "Messages", href: "/messages", icon: FiMessageCircle },
    { name: "Profile", href: "/profile/username", icon: FiUser },
    { name: "Settings", href: "/settings", icon: FiSettings }
  ];

  return (
    <nav className="space-y-6">
      <h1 className="text-2xl font-extrabold">Twiddle</h1>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name} className="flex items-center">
            <SidebarItem
              itemName={link.name}
              itemHref={link.href}
              itemIcon={link.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
