"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  if (
    pathname.startsWith("/user-dashboard") ||
    pathname.startsWith("/admin-dashboard")
  ) {
    return null;
  }

  const links = (
    <>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/services">
        <li>Services</li>
      </Link>
      <Link href="/posts">
        <li>Posts</li>
      </Link>
    </>
  );

  return (
    <div className=" shadow">
      <ul className="flex justify-between gap-5 p-3">{links}</ul>
    </div>
  );
};

export default Navbar;