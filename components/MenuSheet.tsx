"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { navLinks } from "./Nav";
import ContactButton from "./ContactButton";

const MenuSheet = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);
  return (
    <Sheet>
      <SheetTrigger
        className="flex items-center justify-center sm:hidden w-full h-full inset-0 rounded-full hover:bg-primary px-2 sm:hover:bg-white/75 sm:hover:bg-text-gray-900 hover:text-gray-50 duration-300 group/trigger transition-all border border-gray-900/20"
        asChild
      >
        <IoMenu className="text-gray-800 group-hover/trigger:text-gray-50 duration-300 transition-all" />
      </SheetTrigger>
      <SheetContent className="rounded-xl h-fit mt-6 mr-6 w-56 py-10 flex flex-col px-8 gap-2">
        {navLinks.map((item) => (
          <SheetClose
            key={item.name}
            className="text-start outline-none focus-visible:outline-none m-0"
          >
            <a
              href={item.href}
              onClick={() => setPathname(item.href)}
              className={cn(
                pathname === item.href
                  ? "text-primary/90 scale-110"
                  : "text-gray-900/90 opacity-80",
                "transition-all duration-300 text-[15px] md:text-[17px]"
              )}
            >
              {item.name}
            </a>
          </SheetClose>
        ))}
        <SheetClose className="items-start mr-auto ml-0 mt-2">
          <ContactButton simple />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
export default MenuSheet;
