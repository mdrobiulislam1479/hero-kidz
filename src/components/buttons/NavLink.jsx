"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`font-medium ${isActive ? "text-primary" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
