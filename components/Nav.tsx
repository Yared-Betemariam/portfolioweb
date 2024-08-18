"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuSheet from "./MenuSheet";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import ContactButton from "./ContactButton";

export const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Resume",
    href: "#resume",
  },
  {
    name: "Portfolio",
    href: "#works",
  },
  // {
  //   name: "Contact",
  //   href: "#contact",
  // },
];

const Nav = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);

  return (
    <header className="fixed w-full inset-x-0 pb-1 z-50 flex border-b  border-gray-900/15 bg-zinc-50 h-16 md:h-20">
      <nav className="wrapper flex items-center justify-between w-full h-full">
        <Logo />
        <div className="hidden sm:flex items-center gap-12">
          {navLinks.map((item) => (
            <a
              href={item.href}
              onClick={() => setPathname(item.href)}
              key={item.name}
              className={cn(
                pathname === item.href
                  ? "text-primary/90 scale-110"
                  : "opacity-80",
                "transition-all  duration-300 text-[15px] md:text-[17px]"
              )}
            >
              {item.name}
            </a>
          ))}
          <ContactButton simple />
        </div>
        <div className="relative sm:hidden h-10 w-10">
          <MenuSheet />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
